* ============================================================================
* Script: tmp_mon_mean_6190.gs
* Purpose: Compute monthly mean temperature climatology for 1961-1990 reference.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

'reinit'
'open Eta_templ_hadcm40km1960010100.ctl'

'define jan=tp2m.1*0'
'define feb=tp2m.1*0'
'define mar=tp2m.1*0'
'define apr=tp2m.1*0'
'define may=tp2m.1*0'
'define jun=tp2m.1*0'
'define jul=tp2m.1*0'
'define aug=tp2m.1*0'
'define sep=tp2m.1*0'
'define oct=tp2m.1*0'
'define nov=tp2m.1*0'
'define dec=tp2m.1*0'

count=1441
while(count<44640)

'define jan=

