* ============================================================================
* Script: ea.gs
* Purpose: Quick diagnostic helper for vapor pressure related field checks.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

'define eaeta70=evpp.6(t=1)*0'
count4=1
while (count4<=360)
'define eaeta70=eaeta70+evpp.6(t='count4')/360'
count4=count4+1
endwhile
'define eaeta70=eaeta70*1000'
'define eaeta70 = regrid2(eaeta70,0.5)'
