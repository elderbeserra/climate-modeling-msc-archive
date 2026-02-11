* ============================================================================
* Script: cria_txt_pdsi.gs
* Purpose: Export monthly PDSI values to text format.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

'sdfopen 'data_root'/pdsianual.nc'
'sdfopen 'data_root'/agcm20/masksa_79.nc'
'sdfopen 'data_root'/agcm20/maskne.nc'

'set display color white'
'c'
'set lat -18 -2'
'set lon -48 -34'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout grfill'

'define masksa=semiarid.2(t=1,z=1)'
'define maskne=lterp(mask1.3(t=1,z=1),masksa)'
'set t 1 last'
'define pdsimask=lterp(pdsi,masksa)'
'define pdsine=pdsimask/masksa'
'define pdsimed=aave(pdsine,lon=-48,lon=-34,lat=-18,lat=-2)'

count=1
while (count<=24)
'set t 'count
'd pdsimed'
value=subwrd(result,4)
variavel=value
rec=write(data_root%'/pdsi_ref_sa.txt',variavel,append)
count=count+1
endwhile

'quit'
