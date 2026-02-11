* ============================================================================
* Script: pdsi_organiza.gs
* Purpose: Organize and summarize PDSI outputs for analysis.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

'reinit'
* Configurable root path (update for local environment)
data_root='./data'
'open 'data_root'/agcm20/Brazil/present/sfc_Brazil_avr_mon.ctl'
'sdfopen 'data_root'/agcm20/Brazil/present/annual/maskTL959.nc'
'c'
'set lat -18 -2'
'set lon 312 326'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'
'set display color white'
'define t79=ta(t=1)*0'
'define mask = lterp(ratiol.2(t=1,z=1),ta)'
'set t 1 12'
'define p79=ave((ppci+ppli)*86400,t+0,t=300,12)'
'define t79=ave((ta-273.15),t+0,t=300,12)'
'modify p79 seasonal'
'modify t79 seasonal'
'set t 1'

*************** Extracts point-by-point monthly means from mon_T_normal and mon_P_normal
count=1
i=385
j=225
while (i <= 460)
   while (j <= 311)
      while (count <=300)
'set t 'count
'q dims'
cc=sublin(result,5)
kk=subwrd(cc,6)
year=substr(kk,9,4)
month=substr(kk,6,3)
day=substr(kk,4,2)

'd t79'
   'q gr2w 'i' 'j
   latij = subwrd(result,6)
   lonij = subwrd(result,3)
   'set lat 'latij
   'set lon 'lonij
'd (ta-273.15)/mask'
tjan=subwrd(result,4)
'd (ta(t='count+1')-273.15)/mask'
tfeb=subwrd(result,4)
'd (ta(t='count+2')-273.15)/mask'
tmar=subwrd(result,4)
'd (ta(t='count+3')-273.15)/mask'
tapr=subwrd(result,4)
'd (ta(t='count+4')-273.15)/mask'
tmay=subwrd(result,4)
'd (ta(t='count+5')-273.15)/mask'
tjun=subwrd(result,4)
'd (ta(t='count+6')-273.15)/mask'
tjul=subwrd(result,4)
'd (ta(t='count+7')-273.15)/mask'
taug=subwrd(result,4)
'd (ta(t='count+8')-273.15)/mask'
tsep=subwrd(result,4)
'd (ta(t='count+9')-273.15)/mask'
toct=subwrd(result,4)
'd (ta(t='count+10')-273.15)/mask'
tnov=subwrd(result,4)
'd (ta(t='count+11')-273.15)/mask'
tdec=subwrd(result,4)
variaveltm=year%" "%tjan%" "%tfeb%" "%tmar%" "%tapr%" "%tmay%" "%tjun%" "%tjul%" "%taug%" "%tsep%" "%toct%" "%tnov%" "%tdec
rec=write(data_root%'/agcm20/Brazil/present/PDSI/'i'_'j'/monthly_T',variaveltm,append)
*

'd (ppci+ppli)*86400)/mask'
pjan=subwrd(result,4)
'd (ppci(t='count+1')+ppli(t='count+1'))*86400)/mask'
pfeb=subwrd(result,4)
'd (ppci(t='count+2')+ppli(t='count+2'))*86400)/mask'
pmar=subwrd(result,4)
'd (ppci(t='count+3')+ppli(t='count+3'))*86400)/mask'
papr=subwrd(result,4)
'd (ppci(t='count+4')+ppli(t='count+4'))*86400)/mask'
pmay=subwrd(result,4)
'd (ppci(t='count+5')+ppli(t='count+5'))*86400)/mask'
pjun=subwrd(result,4)
'd (ppci(t='count+6')+ppli(t='count+6'))*86400)/mask'
pjul=subwrd(result,4)
'd (ppci(t='count+7')+ppli(t='count+7'))*86400)/mask'
paug=subwrd(result,4)
'd (ppci(t='count+8')+ppli(t='count+8'))*86400)/mask'
psep=subwrd(result,4)
'd (ppci(t='count+9')+ppli(t='count+9'))*86400)/mask'
poct=subwrd(result,4)
'd (ppci(t='count+10')+ppli(t='count+10'))*86400)/mask'
pnov=subwrd(result,4)
'd (ppci(t='count+11')+ppli(t='count+11'))*86400)/mask'
pdec=subwrd(result,4)
variavelpm=year%" "%pjan%" "%pfeb%" "%pmar%" "%papr%" "%pmay%" "%pjun%" "%pjul%" "%paug%" "%psep%" "%poct%" "%pnov%" "%pdec
rec=write(data_root%'/agcm20/Brazil/present/PDSI/'i'_'j'/monthly_P',variavelpm,append)
*
count=count+12
endwhile
    j = j + 1
   endwhile
    i = i + 1
    j=225
 endwhile


i=385
j=225
while (i <= 460)
   while (j <= 311)
   'd t79'
   'q gr2w 'i' 'j
   latij = subwrd(result,6)
   lonij = subwrd(result,3)
   'set lat 'latij
   'set lon 'lonij
   'd t79(t=1)'
   valt791 = subwrd(result,4)
   'd t79(t=2)'
   valt792 = subwrd(result,4)
   'd t79(t=3)'
   valt793 = subwrd(result,4)
   'd t79(t=4)'
   valt794 = subwrd(result,4)
   'd t79(t=5)'
   valt795 = subwrd(result,4)
   'd t79(t=6)'
   valt796 = subwrd(result,4)
   'd t79(t=7)'
   valt797 = subwrd(result,4)
   'd t79(t=8)'
   valt798 = subwrd(result,4)
   'd t79(t=9)'
   valt799 = subwrd(result,4)
   'd t79(t=10)'
   valt7910 = subwrd(result,4)
   'd t79(t=11)'
   valt7911 = subwrd(result,4)
   'd t79(t=12)'
   valt7912 = subwrd(result,4)

   'd p79(t=1)'
   valp791 = subwrd(result,4)
   'd p79(t=2)'
   valp792 = subwrd(result,4)
   'd p79(t=3)'
   valp793 = subwrd(result,4)
   'd p79(t=4)'
   valp794 = subwrd(result,4)
   'd p79(t=5)'
   valp795 = subwrd(result,4)
   'd p79(t=6)'
   valp796 = subwrd(result,4)
   'd p79(t=7)'
   valp797 = subwrd(result,4)
   'd p79(t=8)'
   valp798 = subwrd(result,4)
   'd p79(t=9)'
   valp799 = subwrd(result,4)
   'd p79(t=10)'
   valp7910 = subwrd(result,4)
   'd p79(t=11)'
   valp7911 = subwrd(result,4)
   'd p79(t=12)'
   valp7912 = subwrd(result,4)


    variavelt=valt791%" "%valt792%" "%valt793%" "%valt794%" "%valt795%" "%valt796%" "%valt797%" "%valt798%" "%valt799%" "%valt7910%" "%valt7911%" "%valt7912
 variavelp=valp791%" "%valp792%" "%valp793%" "%valp794%" "%valp795%" "%valp796%" "%valp797%" "%valp798%" "%valp799%" "%valp7910%" "%valp7911%" "%valp7912
    rec=write(data_root%'/agcm20/Brazil/present/PDSI/'i'_'j'/mon_T_normal',variavelt)
    rec=write(data_root%'/agcm20/Brazil/present/PDSI/'i'_'j'/mon_p_normal',variavelp)
    j = j + 1
   endwhile
    i = i + 1
    j=225
 endwhile

