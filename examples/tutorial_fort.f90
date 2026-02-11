c ============================================================================
c Program: tutorial_fort.f90
c Purpose: Fortran prototype/tutorial program preserved for archive traceability.
c Archive Context: MSc dissertation climate modeling workflow (historical archive).
c Inputs: Text or binary intermediate files produced by model post-processing stages.
c Outputs: Binary/text transformed files consumed by GrADS/control-file workflows.
c Path Configuration: Root paths are configurable and default to repository-relative directories.
c Notes:
c   - Core computational logic is preserved to keep reproducibility with original experiments.
c   - Update path variables before compilation/execution in a new environment.
c ============================================================================

c	computes evapotranspiration using Penman-Monteith
c
c         tan = previous-day temperature (degC)
c         lat = latitude (dd,mm)
c         lon = longitude (dd,mm)
c         alt = altitude (m)
c         rs  = surface shortwave radiation
c         ra  = top-of-atmosphere radiation
c         rae = aerodynamic resistance
c         tobs = Observed temperature (degC)
c         ws
c         press = atmospheric pressure (mb)
c         lambda
c         lai
c         wins
c         wind
c         est = station identifier (NNNNN)
c         cp = specific heat
c         g = soil heat flux
c         zh = height where wind is measured
c         zc = meteorological shelter height (temperature measurements)
c         undef = undefined value constant (-99.00)
c         nddel = number of records removed due to synoptic file failures
c         npontos = number of valid records
c         ndabs = number of records with unrealistic ETo
c
      character str1*120, aest*8,rdatarad(8)*8
      integer mm,aa,dd,jul,est,mes(12),coderad(8)      
      real lat,long,alt,lambda,lai,longc,N,ra,rae
      real temp(8),ur(8),vv(8),pres(8),rs(8),weight(3)      
      data mes/31,28,31,30,31,30,31,31,30,31,30,31/
      data cp/0.001013/
      data etomax/9./,etomin/0./
      data coderad/32574,32589,32590,32591,32593,32597,
     *32597,32598/
      data rdatarad/'99999999','20050314','20031010','20040430',
     *'20040505','20031011','99999999','99999999'/     
      data weight/0.13,0.37,0.37/ 
c
c     shell input data
c
      dd=$dd
      mm=$mm
      aa=$aa
      lati = $lati
      latf = $latf
      loni = $loni
      lonf = $lonf
c
c     computes Julian day numbers
c      
      if(mod(aa,4).eq.0) mes(2)=29
      jul=dd
      do i=1,mm-1
      	jul=jul+mes(i)
      enddo
c
c     fixed variables
c      
c
c     resistance factors
c     
      hc=0.12 
      zm=10.
      zh=1.5
      lai=24*hc
      rc=200/lai
      d=2*hc/3
      zom=0.123*hc
      zoh=0.1*zom
c
c     radiation terms
c                    
      dr=1+0.033*cos(6.2832*jul/365)
      declin=0.4093*sin(6.2832*jul/365-1.405)
      b=2.*3.14159*(jul-81.)/364.
      Sc=0.1645*sin(2.*b)-0.1255*cos(b)-0.025*sin(b)
c
c     open input files
c        

      open(1,file='${dir_evap}/pcds/'//
     * 'pcds${data}'//'.dat',status = 'old', form = 'formatted')

c
c     open output files
c
c
c      file for GRADS reading
c
      open(4,file='${dir_evap_out}/etp${data}'//
     *             '.dat',access = 'append', status = 'unknown', 
     *		   form = 'formatted')
c
c     quality control log file
c
      open(5,file='${dir_evap_out}/falhas${data}'//
     *            '.dat',access = 'append', status = 'unknown', 
     *		  form = 'formatted')

c
c    writes control file header
c
      write(5,110)
110   format(' PCDS data diagnostics:',//,
     *'       stn','       lon','       lat','       eto',' hour(GMT)',
     *'      temp','        ur','      pres','        vv','        rs')
      nddel=-1
      ndabs=0
      npontos=0
      undef = -99.00
      read(1,'(a77)') str1
10    nddel=nddel+1
50    read(1,*,end=40) est,long,lat,alt,tmin,tmax,(temp(i),i=1,8),
     *(ur(i),i=1,8),(pres(i),i=1,8),(vv(i),i=1,8),
     *(rs(i),i=1,8)
      
C     Remove station 31980 due to known issues in this period - DANIEL
      if(est.eq.31980) goto 50
c
c     determines the most suitable synoptic hours
c      
      if(long.gt.-37.5) then
c	      local hours 10, 13 and 14
      	ih1=4
	      ih2=6
	      longc=-30
	      fuso=-2.+0.06667*(longc-long)+Sc
      elseif(long.gt.-52.5) then
c	      local hours 9, 12 and 15
      	ih1=4
	      ih2=6
	      longc=-45
	      fuso=-3.+0.06667*(longc-long)+Sc
      elseif(long.gt.-67.5) then
c	      local hours 11, 14 and 17
      	ih1=5
	      ih2=7
	      longc=-60
	      fuso=-4.+0.06667*(longc-long)+Sc	
      elseif(long.gt.-82.5) then
c	      local hours 10, 13 and 16
      	ih1=5
	      ih2=7
	      longc=-75
	      fuso=-5.+0.06667*(longc-long)+Sc	
      endif
c
c     daylight hour terms
c
      ws=acos(-tan(lat*0.01745)*tan(declin))
c      N = 24*ws/3.1416          
c
c     identifies stations with different radiation programming
c
      do j=1,7
	      if(est.eq.coderad(j).and.'$aa$mm$dd'.lt.rdatarad(j)) then
		      if(rs(ih1).lt.-10.) exit
		      aux=rs(ih1)
		      do ih=ih1,ih2
			      rs(ih)=weight(ih-ih1+1)*aux
		      enddo
	      endif
      enddo
c
c     loop over the three most relevant synoptic hours
c
      eto=0.
      ietp=0.    
      do ih=ih1,ih2
c
c           removes stations without all required data
c
      	if(temp(ih).lt.0..or.ur(ih).lt.0.) go to 80
      	if(vv(ih).lt.0..or.rs(ih).lt.0.) go to 80
c
c	      computes extraterrestrial radiation
c	      local time is centered in the previous interval
c                   
	      hhlocal=3.*ih+fuso-1.5
	      if(hhlocal.lt.0.) hhlocal=hhlocal+24.
c
c	      solar angle
c
	      w=3.14159*(hhlocal-12.)/12.
	      w1=max(-ws,w-3.14159*1.5/12.)
	      w2=min(ws,w+3.14159*1.5/12.)
c
c	      time interval
c	
	      deltat=(w2-w1)*12./3.14159
c
c	      estimates extraterrestrial radiation from the previous 3-hour accumulation
c	      at the synoptic time, matching station sensor behavior.
c			
	      ra=18.793*dr*((w2-w1)*sin(lat*0.01745)*sin(declin)+
     *	cos(0.01745*lat)*cos(declin)*(sin(w2)-sin(w1)))
c
c	      extraterrestrial radiation in MJ/m2/h
c     
     	      ra=ra/deltat
c
c	      converts 3-hour accumulated MJ/m2 radiation to MJ/m2/hour
c
	      rs(ih)=rs(ih)/3.	
      	if(pres(ih).lt.0.) then
c      
c	            estimates pressure using altitude
c
		      pres(ih)=101.3*((293-0.0065*alt)/293)**5.256
	      else
c
c		      pressure expressed in kPa
c      
		      pres(ih)=pres(ih)*0.1
	      endif
c
c	calculates humidity terms
c            
	      es=0.6108*exp((17.27*temp(ih))/(temp(ih)+237.3))
      	ed=ur(ih)*es/100
      	lambda=2.501-(2.361e-3)*temp(ih)
      	delta=4098*es/(temp(ih)+237.3)**2
      	gamma=0.0016286*pres(ih)/lambda     
      	rho=3.486*pres(ih)/(1.01*(temp(ih)+273))
c
c     	longwave and net radiation terms
c	      clear-sky radiation = ra*(0.75+2.e-5*alt)
c
      	rso=max(rs(ih),ra*(0.75+2.e-5*alt))
      	rb=-(1.35*rs(ih)/rso-0.35)*(0.34-0.14*sqrt(ed))*
     *	2.04292e-10*(temp(ih)+273.16)**4
      	rn=(1-0.23)*rs(ih)+rb
c
c     	soil heat flux (Choudhury, 1989)
c     	g=0.4*exp(-0.5*LAI)*RN
c
      	g=0.095*rn
c
c	      avoids division by zero by forcing wind to 0.001 when needed
c	      when wind speed equals zero
c
	      if (vv(ih).eq.0) vv(ih) = 0.001
c
c	computes aerodynamic resistance
c
	      rae=log((zm-d)/zom)*log((zh-d)/zoh)/(0.1681*vv(ih))
	      aux=(delta*(rn-g)+3600*rho*cp*(es-ed)/rae)/lambda
c
c	      computes potential evapotranspiration (mm/h)
c
	      eto1=aux/(delta+gamma*(1+rc/rae))
c
c	      accumulated ETo
c
	      eto=eto+eto1*deltat
c           write(*,*) est,ra,rs,rn-g,rb,eto1,hhlocal
c	      pause		
	      ietp=ietp+1
80    enddo
      if(ietp.lt.3) goto 10    
c      
c	debug: write(*,*) eto
c	debug: pause
c
c	quality control for computed ETo
c      
      if(eto.gt.etomax.or.eto.lt.etomin) then     
	      ndabs=ndabs+1
c
c     	writes to quality control file
c
      	write(5,90) est,long,lat,eto
90    	format(i10,4f10.2)
      	do ih=ih1,ih2
		write(5,30) 3*ih,temp(ih),ur(ih),pres(ih),vv(ih),rs(ih)
30		format(40x,i10,5f10.2)
	enddo
      	go to 50
      else
c
c	writes output file for GrADS
c      
      	npontos=npontos+1
      	write(aest,'(i8)') est      
      	write(4,60) aest,long,lat,eto
60    	format(2x,a8,3f13.3)
      	go to 50
      endif
40    write(5,100) npontos,nddel, ndabs
100   format(///,' Number of points with valid information = ',i8,/,
     *' Number of deleted records = ',i8,/,
     *' Number of records with ETo outside limits = ',i8,//)
      stop
      end
