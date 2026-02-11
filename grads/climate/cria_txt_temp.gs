* ============================================================================
* Script: cria_txt_temp.gs
* Purpose: Export temperature time series for semiarid analysis.
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
'open 'data_root'/agcm20/Brazil/future/sfc_Brazil_avr_mon.ctl'
'sdfopen 'data_root'/agcm20/masksa_79.nc'

'set display color white'
'c'
'set lat -18 -2'
'set lon -48 -34'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'

'define masksa=semiarid.2(t=1,z=1)'
'set t 1 300'
'define tmon=ta-273.15'
'define tmon=lterp(tmon,masksa)'
'define tmonmask=tmon/masksa'
'define tmonmed=aave(tmonmask,lon=-48,lon=-34,lat=-18,lat=-2)'

'set t 1'

count=1
while (count<=300)
'set t 'count
'define tmonmeda=ave(tmonmed,t='count',t='count+11')'
'd tmonmeda'
tmonjan=subwrd(result,4)
variavel=tmonjan
rec=write(data_root%'/temp_sa_future.txt',variavel,append)

count=count+12
endwhile

'quit'
