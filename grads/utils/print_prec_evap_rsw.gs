* ============================================================================
* Script: print_prec_evap_rsw.gs
* Purpose: Generate combined precipitation/evaporation/radiation plots.
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

*pa1b
i=1
while(i<=3)
j=1
  while(j<=5)
  'set grads off'
  'set xlint 2'
  'cor pa1b'
  'd p'subwrd(str,j)'eta'subwrd(str4,i)'-p'subwrd(str,j)'eta'
  'basemap o 0 1 l'
  'cbarn 1 1 8.3'
  'draw title Prec, ('subwrd(str2,i)')-Ref, 'subwrd(str3,j)', mm/day'
  'printim 'output_root'/img/a1b/prec/p_a1b_'subwrd(str2,i)'_'subwrd(str,j)'.gif gif white'
  'c'
  j=j+1
  endwhile
i=i+1
endwhile

***
*ea1b

i=1
while(i<=3)
j=1
  while(j<=5)
  'set grads off'
  'set xlint 2'
  'cor pa1b'
  'd (p'subwrd(str,j)'eta'subwrd(str4,i)'-e'subwrd(str,j)'eta'subwrd(str4,i)')-(p'subwrd(str,j)'eta-e'subwrd(str,j)'eta)'
  'basemap o 0 1 l'
  'cbarn 1 1 8.3'
  'draw title P-E change, ('subwrd(str2,i)')-Ref, 'subwrd(str3,j)', mm/day'
  'printim 'output_root'/img/a1b/p-e/p-e_a1b_'subwrd(str2,i)'_'subwrd(str,j)'.gif gif white'
  'c'
  j=j+1
  endwhile
i=i+1
endwhile


***
*rsw a1b

i=1
while(i<=3)
  'set grads off'
  'set xlint 2'
  'cor wa1b'
  'd ((rzwaeta'subwrd(str4,i)'-rzwaeta)/rzwaeta)*100'
  'basemap o 0 1 l'
  'cbarn 1 1 8.3'
  'draw title Root zone Soil Water change\ ('subwrd(str2,i)')-Ref, Annual, %'
  'printim 'output_root'/img/a1b/rzsw/rsw_a1b_'subwrd(str2,i)'_a.gif gif white'
  'c'
i=i+1
endwhile
