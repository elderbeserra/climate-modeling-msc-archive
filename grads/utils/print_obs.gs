* ============================================================================
* Script: print_obs.gs
* Purpose: Generate plot outputs for observational diagnostics.
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

*TEMP REF-CRU

'set grads off'
'set xlint 2'
'cor tcru'
'd taeta-ta'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Temperature, Ref-CRU, Annual'
'printim t_ref_a.gif gif white'
'c'

'set grads off'
'set xlint 2'
'cor tcru'
'd tdjfeta-tdjf'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Temperature, Ref-CRU, DJF'
'printim t_ref_djf.gif gif white'
'c'

'set grads off'
'set xlint 2'
'cor tcru'
'd tmameta-tmam'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Temperature, Ref-CRU, MAM'
'printim t_ref_mam.gif gif white'
'c'

'set grads off'
'set xlint 2'
'cor tcru'
'd tjjaeta-tjja'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Temperature, Ref-CRU, JJA'
'printim t_ref_jja.gif gif white'
'c'

'set grads off'
'set xlint 2'
'cor tcru'
'd tsoneta-tson'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Temperature, Ref-CRU, SON'
'printim t_son_a.gif gif white'
'c'

***
*Prec CRU

'set grads off'
'set xlint 2'
'cor pcru'
'd paeta-pa'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Prec, Ref-CRU, Annual, mm/day'
'printim p_ref_a.gif gif white'
'c'

'set grads off'
'set xlint 2'
'cor pcru'
'd pdjfeta-pdjf'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Prec, Ref-CRU, DJF, mm/day'
'printim p_ref_djf.gif gif white'
'c'

'set grads off'
'set xlint 2'
'cor pcru'
'd pmameta-pmam'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Prec, Ref-CRU, MAM, mm/day'
'printim p_ref_mam.gif gif white'
'c'
'set grads off'
'set grads off'
'set xlint 2'
'cor pcru'
'd pjjaeta-pjja'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Prec, Ref-CRU, JJA, mm/day'
'printim p_ref_jja.gif gif white'
'c'

'set grads off'
'set xlint 2'
'cor pcru'
'd psoneta-pson'
'basemap o 0 1 l'
'cbarn 1 1 8.3'
'draw title Prec, Ref-CRU, SON, mm/day'
'printim p_ref_son.gif gif white'
'c'
