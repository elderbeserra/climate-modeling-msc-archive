* ============================================================================
* Script: validaca_temp.gs
* Purpose: Validate modeled temperature against observational datasets.
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
'sdfopen 'data_root'/obs_proclima/temp/tempmon2.nc'
'open 'data_root'/agcm20/Brazil/present/sfc_Brazil_avr_mon.ctl'
'sdfopen 'data_root'/agcm20/Brazil/maskTL959.nc'
'c'
'set lat -18 -2'
'set lon -48 -34'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'
'set display color white'
*'define mask = lterp(ratiol.3(t=1,z=1),ta.2(t=1,z=1))'
*'define pobs = lterp(prec.3(t=1,z=1),ta)'
'set t 1'

'define toa79 = (sum(tmed,t=1,t=12))/12'
'define todjf79 = (tmed(t=1)+tmed(t=2)+tmed(t=12))/3'
'define tomam79 = (tmed(t=3)+tmed(t=4)+tmed(t=5))/3'
'define tojja79 = (tmed(t=6)+tmed(t=7)+tmed(t=8))/3'
'define toson79 = (tmed(t=9)+tmed(t=10)+tmed(t=11))/3'

*
'set dfile 2'
*'set lat -18 -2'
*'set lon 312 326'
'define mask = lterp(ratiol.3(t=1,z=1),ta)'
'set t 1 12'
'define t79=ave(ta-273.15,t+0,t=264,12)'
'modify t79 seasonal'

'set t 1'
'define ta79=((sum(t79,t=1,t=12))/12)/mask'
'define tdjf79=((t79(t=12)+t79(t=1)+t79(t=2))/3)/mask'
'define tmam79=((t79(t=3)+t79(t=4)+t79(t=5))/3)/mask'
'define tjja79=((t79(t=6)+t79(t=7)+t79(t=8))/3)/mask'
'define tson79=((t79(t=9)+t79(t=10)+t79(t=11))/3)/mask'


'define ta79 = regrid2(ta79,0.2)'
'define tdjf79 = regrid2(tdjf79,0.2)'
'define tmam79 = regrid2(tmam79,0.2)'
'define tjja79 = regrid2(tjja79,0.2)'
'define tson79 = regrid2(tson79,0.2)'

'set dfile 1'
*'set lon -48 -34'
'define toa79 = regrid2(toa79,0.2)'
'define todjf79 = regrid2(todjf79,0.2)'
'define tomam79 = regrid2(tomam79,0.2)'
'define tojja79 = regrid2(tojja79,0.2)'
'define toson79 = regrid2(toson79,0.2)'

