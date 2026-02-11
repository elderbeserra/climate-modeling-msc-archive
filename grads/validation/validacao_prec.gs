* ============================================================================
* Script: validacao_prec.gs
* Purpose: Validate modeled precipitation against observational datasets.
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
'sdfopen 'data_root'/obs_proclima/prec_7010/prec_7990mon1.nc'
'open 'data_root'/agcm20/Brazil/present/sfc_Brazil_avr_mon.ctl'
'sdfopen 'data_root'/agcm20/Brazil/maskTL959.nc'
'sdfopen 'data_root'/obs_proclima/INMET/prec/precip.nc'
'c'
'set lat -18 -2'
'set lon -48 -34'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'
'set display color white'
*'define mask = lterp(ratiol.3(t=1,z=1),ta.2(t=1,z=1))'
*'define pobs = lterp(prec.3(t=1,z=1),ta)'
count=1
while (count<=12)
'set t 'count
'define pobs1 = lterp(precip.4(t='count',z=1),prec)'
count=count+1
endwhile
'set t 1'

'define poa79 = (sum(prec,t=1,t=12))/12'
'define podjf79 = (prec(t=1)+prec(t=2)+prec(t=12))/3'
'define pomam79 = (prec(t=3)+prec(t=4)+prec(t=5))/3'
'define pojja79 = (prec(t=6)+prec(t=7)+prec(t=8))/3'
'define poson79 = (prec(t=9)+prec(t=10)+prec(t=11))/3'
'define po1a79= (sum(pobs1,t=1,t=12))/12'
'define po1djf79 = (pobs1(t=1)+pobs1(t=2)+pobs1(t=12))/3'
'define po1mam79 = (pobs1(t=3)+pobs1(t=4)+pobs1(t=5))/3'
'define po1jja79 = (pobs1(t=6)+pobs1(t=7)+pobs1(t=8))/3'
'define po1son79 = (pobs1(t=9)+pobs1(t=10)+pobs1(t=11))/3'
*
'set dfile 2'
*'set lat -18 -2'
*'set lon 312 326'
'define mask = lterp(ratiol.3(t=1,z=1),ta)'
'set t 1 12'
'define p79=ave((ppci+ppli)*86400,t+0,t=144,12)'
'modify p79 seasonal'

'set t 1'
'define pa79=((sum(p79,t=1,t=12))/12)/mask'
'define pdjf79=((p79(t=12)+p79(t=1)+p79(t=2))/3)/mask'
'define pmam79=((p79(t=3)+p79(t=4)+p79(t=5))/3)/mask'
'define pjja79=((p79(t=6)+p79(t=7)+p79(t=8))/3)/mask'
'define pson79=((p79(t=9)+p79(t=10)+p79(t=11))/3)/mask'


'define pa79 = regrid2(pa79,0.2)'
'define pdjf79 = regrid2(pdjf79,0.2)'
'define pmam79 = regrid2(pmam79,0.2)'
'define pjja79 = regrid2(pjja79,0.2)'
'define pson79 = regrid2(pson79,0.2)'

'set dfile 1'
*'set lon -48 -34'
'define poa79 = regrid2(poa79,0.2)'
'define podjf79 = regrid2(podjf79,0.2)'
'define pomam79 = regrid2(pomam79,0.2)'
'define pojja79 = regrid2(pojja79,0.2)'
'define poson79 = regrid2(poson79,0.2)'

'define po1a79 = regrid2(po1a79,0.2)'
'define po1djf79 = regrid2(po1djf79,0.2)'
'define po1mam79 = regrid2(po1mam79,0.2)'
'define po1jja79 = regrid2(po1jja79,0.2)'
'define po1son79 = regrid2(po1son79,0.2)'

