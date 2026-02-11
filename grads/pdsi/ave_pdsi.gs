* ============================================================================
* Script: ave_pdsi.gs
* Purpose: Compute temporal/spatial averages for PDSI fields.
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
'sdfopen 'data_root'/pdsi_nearanual.nc'
'sdfopen 'data_root'/pdsi_futureanual.nc'
'sdfopen 'data_root'/agcm20/masksa_79.nc'
'c'
'set lat -18 -2'
'set lon -48 -34'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'
'set display color white'

'set t 1'
'define ref = ave(pdsi,t=1,t=24)'
'define nea = ave(pdsi.2,t=36,t=60)'
'define fut = ave(pdsi.3,t=96,t=120)'
