* ============================================================================
* Script: print.gs
* Purpose: Generate standard diagnostic plot panels.
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
str2="reference near future"
str3="Annual DJF MAM JJA SON"
str4="79 15 75"
str5="1979-2003 2015-2039 2075-2099"
str6="cru_ts3 mri"
str7="CRU3.0 MRI-GCM20"
str8="cru3.0 mri"
str9="cru gp 79"
str10="CRU3.0 GPCC MRI-GCM20"
str11="cru3.0 gp mri"
str12="cru_ts3 gpcc mri"
***
*tcru
j=1
  while(j<=5)
'set grads off'
'set xlint 2'
'cor pcru'
'd p'subwrd(str,j)'79-po'subwrd(str,j)'79'
'cbarn 1 1 8.3'
'printim 'output_root'/imgnew/p_ref-obs_'subwrd(str,j)'.gif gif white'
'c'
  j=j+1
  endwhile
***
*pcru
'set xlopts 1 1 0.13'
'set ylopts 1 1 0.13'
'c'

j=1
  while(j<=5)
'set grads off'
'set xlint 2'
'cor prec'
'd p'subwrd(str,j)'79'
'cbarn 1 1 8.3'
'printim 'output_root'/imgnew/p_ref_'subwrd(str,j)'.gif gif white'
'c'
  j=j+1
  endwhile

j=1
  while(j<=5)
'set grads off'
'set xlint 2'
'cor prec'
'd po'subwrd(str,j)'79'
'cbarn 1 1 8.3'
'printim 'output_root'/imgnew/p_obs_'subwrd(str,j)'.gif gif white'
'c'
  j=j+1
  endwhile
