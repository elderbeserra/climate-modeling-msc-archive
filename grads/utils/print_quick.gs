* ============================================================================
* Script: print_quick.gs
* Purpose: Generate quick-look diagnostic plots.
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

'c'
'set xlopts 1 1 0.13'
'set ylopts 1 1 0.13'
'set grads off'
'set xlint 2'

