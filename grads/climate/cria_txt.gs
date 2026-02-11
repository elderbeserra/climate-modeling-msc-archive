* ============================================================================
* Script: cria_txt.gs
* Purpose: Generate per-grid monthly text inputs for downstream PDSI workflows.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

*
'open 'data_root'/agcm20/Brazil/present/sfc_Brazil_avr_mon.ctl'
'sdfopen 'data_root'/agcm20/Brazil/maskTL959.nc'
'c'
*
'set lat -18 -2'
'set lon 312 326'
'define mask = lterp(ratiol.2(t=1,z=1),ta)'

'set t 1 12'
'define p79=ave((ppci+ppli)*86400,t+0,t=300,12)'
'define t79=ave((ta-273.15),t+0,t=300,12)'
'modify p79 seasonal'
'modify t79 seasonal'
*
pathh=data_root%'/agcm20/Brazil/near_future/PDSI'
'set x '460
'set y '311

'set t 1'

'd t79(t=1)/mask'
tnjan=subwrd(result,4)
'd t79(t=2)/mask'
tnfeb=subwrd(result,4)
'd t79(t=3)/mask'
tnmar=subwrd(result,4)
'd t79(t=4)/mask'
tnapr=subwrd(result,4)
'd t79(t=5)/mask'
tnmay=subwrd(result,4)
'd t79(t=6)/mask'
tnjun=subwrd(result,4)
'd t79(t=7)/mask'
tnjul=subwrd(result,4)
'd t79(t=8)/mask'
tnaug=subwrd(result,4)
'd t79(t=9)/mask'
tnsep=subwrd(result,4)
'd t79(t=10)/mask'
tnoct=subwrd(result,4)
'd t79(t=11)/mask'
tnnov=subwrd(result,4)
'd t79(t=12)/mask'
tndec=subwrd(result,4)
variavelt=tnjan%" "%tnfeb%" "%tnmar%" "%tnapr%" "%tnmay%" "%tnjun%" "%tnjul%" "%tnaug%" "%tnsep%" "%tnoct%" "%tnnov%" "%tndec
rec=write(pathh'/'460311'/mon_T_normal',variavelt)

'd p79(t=1)/mask'
pnjan=subwrd(result,4)
'd p79(t=2)/mask'
pnfeb=subwrd(result,4)
'd p79(t=3)/mask'
pnmar=subwrd(result,4)
'd p79(t=4)/mask'
pnapr=subwrd(result,4)
'd p79(t=5)/mask'
pnmay=subwrd(result,4)
'd p79(t=6)/mask'
pnjun=subwrd(result,4)
'd p79(t=7)/mask'
pnjul=subwrd(result,4)
'd p79(t=8)/mask'
pnaug=subwrd(result,4)
'd p79(t=9)/mask'
pnsep=subwrd(result,4)
'd p79(t=10)/mask'
pnoct=subwrd(result,4)
'd p79(t=11)/mask'
pnnov=subwrd(result,4)
'd p79(t=12)/mask'
pndec=subwrd(result,4)
variavelp=pnjan%" "%pnfeb%" "%pnmar%" "%pnapr%" "%pnmay%" "%pnjun%" "%pnjul%" "%pnaug%" "%pnsep%" "%pnoct%" "%pnnov%" "%pndec
rec=write(pathh'/'460311'/mon_P_normal',variavelp)
*
'quit'
*************************************
*   
