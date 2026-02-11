* ============================================================================
* Script: print_future.gs
* Purpose: Generate plot outputs for future scenario diagnostics.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

* Configurable output root (update for local environment)
output_root='./output'

'set xlopts 1 1 0.13'
'set ylopts 1 1 0.13'
'c'
str="a djf mam jja son"
str2="cru 79"
str3="Annual DJF MAM JJA SON"
str4="79 15 75"
str5="GPCC CRU_TS_3.0 MRI-GCM20"
str6="cru_ts3 mri"
str7="CRU3.0 MRI-GCM20"
str8="cru3.0 mri"
str9="cru gp 79"
str10="CRU3.0 GPCC MRI-GCM20"
str11="cru3.0 gp mri"
str12="cru_ts3 gpcc mri"
***
*tcru
i=1
while(i<=2)
j=1
  while(j<=5)
  'set grads off'
  'set xlint 2'
  'cor temp'
  'd t'subwrd(str,j)'79'
  'basemap o 0 1 m'
  'cbarn 1 1 8.3'
  'draw title Temperature, MRI-GCM20 , 2075-2099, 'subwrd(str3,j)', 50km'
  'printim 'output_root'/climatology/mri/50km/future/temp/t_future_'subwrd(str,j)'_mri_50km.gif gif white'
  'c'
  j=j+1
  endwhile
i=i+1
endwhile
***
*pcru
'set xlopts 1 1 0.13'
'set ylopts 1 1 0.13'
'c'

i=1
while(i<=3)
j=1
  while(j<=5)
  'set grads off'
  'set xlint 2'
  'cor prec'
  'd p'subwrd(str,j)'79'
  'basemap o 0 1 m'
  'cbarn 1 1 8.3'
  'draw title Precipitation, MRI-GCM20 , 2075-2099, 'subwrd(str3,j)', 50km'
  'printim 'output_root'/climatology/mri/50km/future/prec/p_future_'subwrd(str,j)'_mri_50km.gif gif white'
  'c'
  j=j+1
  endwhile
i=i+1
endwhile

