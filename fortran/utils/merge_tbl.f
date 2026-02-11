c ============================================================================
c Program: merge_tbl.f
c Purpose: Merge station/grid table outputs into consolidated text artifacts.
c Archive Context: MSc dissertation climate modeling workflow (historical archive).
c Inputs: Text or binary intermediate files produced by model post-processing stages.
c Outputs: Binary/text transformed files consumed by GrADS/control-file workflows.
c Path Configuration: Root paths are configurable and default to repository-relative directories.
c Notes:
c   - Core computational logic is preserved to keep reproducibility with original experiments.
c   - Update path variables before compilation/execution in a new environment.
c ============================================================================

c
c     adds daily precipitation data
c
      Parameter(nptx=75,npty=86,npt=nptx*npty)
      integer idmun(npt),mun(3000),jpos(1000),cont,iini,ifin,jini,jfin
      real cad(npt),ano(25),mjan(25),mfeb(25),mmar(25),mapr(25),mmay(25),mjun(25),mjul(25),maug(25),msep(25),moct(25),mnov(25),mdec(25)
      character nome*70(3000),estado*2(3000)
      character*36 data_root
      character*14 home_proclima_root
      character*43 pdsi_present_root
      data data_root /'./data'/
      data home_proclima_root /'./data/home_proclima'/
      data pdsi_present_root /'./data/agcm20/Brazil/present/PDSI'/
c
c     reads the list of municipality codes
c
      iini=385
      ifin=460
      jini=225
      jfin=311
      do x=iini,ifin,1
      do y=jini,jfin,1
      do cont=1,npt
      open(cont,file=pdsi_present_root//'/'//x//'_'//y//'/monthly/PDSI.tbl',status='unknown')
      i=1
10    read(cont,'(1x,i4,1x,F5.2,1x)',end=20) ano(i),mjan(i),mfeb(i),mmar(i),mapr(i),mmay(i),mjun(i),mjul(i),maug(i),msep(i),moct(i),mnov(i),
     *mdec(i)
      i=i+1
      goto 10
20    close(1)
      end do
      end do
      end do
c
c     opens the CAD file
c    
c
c     reads municipality codes
c      	
      open(5,file=home_proclima_root//'/mila/'//
     *'municipios.bin',
     *status = 'old', form = 'unformatted',
     *recordtype = 'stream')
      read(5) (idmun(i),i=1,npt)
      close(5)
c
c     opens output file
c
      open(9999,file=pdsi_present_root//'/psdi.txt',status = 'unknown',form = 'formatted')
c
c     selects grid cells corresponding to municipality mun
c     
      do i=1,nmun
      	npos=1
      	do j=1,npt
      		if(idmun(j).eq.mun(i)) then
			jpos(npos)=j
			npos=npos+1
		endif
      	enddo
      	npos=npos-1
	if(npos.eq.0) then
		write(*,*) mun(i)
		goto 30
	endif      
c
c       computes the CAD mean for municipality i_mun
c
      	do j=1,npos
		cad_c=cad_c+cad(jpos(j))
      	enddo
      	cad_c=cad_c/npos
	if(estado(i).eq.'SE') then
c		write(*,'(i15,1x,a25)') mun(i),nome(i)
      		write(2,50) mun(i),cad_c,nome(i)
        endif
30	continue
      enddo
50    format(i15,f15.2,1x,a25)
      stop
      end
      
