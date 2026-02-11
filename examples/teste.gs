* ============================================================================
* Script: teste.gs
* Purpose: Prototype GrADS test script preserved for archive traceability.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

'reinit'
'open  Eta_templ_hadcm40km1960010100.ctl'
'set lat -18 -2'
'set lon -48 -34'

'define jan=prec.1*0'
'define feb=prec.1*0'
'define mar=prec.1*0'
'define apr=prec.1*0'
'define may=prec.1*0'
'define jun=prec.1*0'
'define jul=prec.1*0'
'define aug=prec.1*0'
'define sep=prec.1*0'
'define oct=prec.1*0'
'define nov=prec.1*0'
'define dec=prec.1*0'

count=1441
while(count<44640)

'define jan=jan+ave(prec.1,t='count',t='count+119')'
'define feb=feb+ave(prec.1,t='count+120',t='count+239')'
'define mar=mar+ave(prec.1,t='count+240',t='count+359')'
'define apr=apr+ave(prec.1,t='count+360',t='count+479')'
'define may=may+ave(prec.1,t='count+480',t='count+599')'
'define jun=jun+ave(prec.1,t='count+600',t='count+719')'
'define jul=jul+ave(prec.1,t='count+720',t='count+839')'
'define aug=aug+ave(prec.1,t='count+840',t='count+959')'
'define sep=sep+ave(prec.1,t='count+960',t='count+1079')'
'define oct=oct+ave(prec.1,t='count+1080',t='count+1199')'
'define nov=nov+ave(prec.1,t='count+1200',t='count+1319')'
'define dec=dec+ave(prec.1,t='count+1320',t='count+1439')'

count=count+1440
endwhile

'define jan=jan/30'
'define feb=feb/30'
'define mar=mar/30'
'define apr=apr/30'
'define may=may/30'
'define jun=jun/30'
'define jul=jul/30'
'define aug=aug/30'
'define sep=sep/30'
'define oct=oct/30'
'define nov=nov/30'
'define dec=dec/30'


'set gxout fwrite'
'set fwrite prec_mon_mean_6190.bin'

'd jan'
'd feb'
'd mar'
'd apr'
'd may'
'd jun'
'd jul'
'd aug'
'd sep'
'd oct'
'd nov'
'd dec'

'disable fwrite'

'quit'

