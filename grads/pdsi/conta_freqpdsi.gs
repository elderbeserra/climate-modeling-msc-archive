* ============================================================================
* Script: conta_freqpdsi.gs
* Purpose: Compute PDSI frequency statistics by category.
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

c_dry=0
c_moderate=0
c_extreme=0
i = 1
j = 1
count=1
while (count<=24)
  'set t 'count
  while (i <= 86)
    while (j <= 75)
'define pdsinea=pdsine(t='count')'
      'q defval pdsinea 'i' 'j''
      pdsival = subwrd(result,3)

      if (pdsival <= -2 & pdsival > -4)
        c_moderate=c_moderate+1
      endif
  
      if (pdsival <= -4)
        c_extreme=c_extreme+1
      endif

      j = j + 1
    endwhile
    j = 1
    i = i + 1
  endwhile
variavel=c_moderate%" "%c_extreme
rec=write(data_root%'/classes_pdsi_ref.txt',variavel,append)
count=count+1
i = 1
j = 1
c_dry=0
c_moderate=0
c_extreme=0
endwhile
