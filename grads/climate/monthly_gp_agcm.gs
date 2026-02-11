* ============================================================================
* Script: monthly_gp_agcm.gs
* Purpose: Produce monthly AGCM climatological summaries.
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
'open 'data_root'/agcm20/Brazil/future/sfc_Brazil_avr_mon.ctl'
'open 'data_root'/gpcp/unpack/gpcc_v004_05d_1979-2003.ctl'
'open 'data_root'/cru/CRU_TS_3.0/cru_ts3_1979-2003.ctl'
'set display color white'
'c'
'set lat -18 -2'
'set lon 312 326'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'

'set t 1 12'
'define p79=ave((ppci+ppli)*86400,t+0,t=300,12)'
'define t79=ave((ta-273.15),t+0,t=300,12)'
'modify p79 seasonal'
'modify t79 seasonal'

'set t 1'
'define pa79=(sum(p79,t=1,t=12))/12'
'define pacc79=(sum((p79*30),t=1,t=12))'
'define ta79=(sum(t79,t=1,t=12))/12'
'define pdjf79=(p79(t=12)+p79(t=1)+p79(t=2))/3'
'define pmam79=(p79(t=3)+p79(t=4)+p79(t=5))/3'
'define pjja79=(p79(t=6)+p79(t=7)+p79(t=8))/3'
'define pson79=(p79(t=9)+p79(t=10)+p79(t=11))/3'
'define tdjf79=(t79(t=12)+t79(t=1)+t79(t=2))/3'
'define tmam79=(t79(t=3)+t79(t=4)+t79(t=5))/3'
'define tjja79=(t79(t=6)+t79(t=7)+t79(t=8))/3'
'define tson79=(t79(t=9)+t79(t=10)+t79(t=11))/3'

'define pa79=re(pa79,0.5)'
'define pacc79=re(pacc79,0.5)'
'define ta79=re(ta79,0.5)'
'define pdjf79=re(pdjf79,0.5)'
'define pmam79=re(pmam79,0.5)'
'define pjja79=re(pjja79,0.5)'
'define pson79=re(pson79,0.5)'
'define tdjf79=re(tdjf79,0.5)'
'define tmam79=re(tmam79,0.5)'
'define tjja79=re(tjja79,0.5)'
'define tson79=re(tson79,0.5)'

*********
'set dfile 2'
'set t 1 12'
'define p79gp=ave(var1/30,t+0,t=300,12)'
'modify p79gp seasonal'
*'define p79gp=re(p79gp,0.5)'

'set t 1'
'define pagp=(sum(p79gp,t=1,t=12))/12'
'define paccgp=sum((p79gp*30),t=1,t=12)'
'define pdjfgp=(p79gp(t=12)+p79gp(t=1)+p79gp(t=2))/3'
'define pmamgp=(p79gp(t=3)+p79gp(t=4)+p79gp(t=5))/3'
'define pjjagp=(p79gp(t=6)+p79gp(t=7)+p79gp(t=8))/3'
'define psongp=(p79gp(t=9)+p79gp(t=10)+p79gp(t=11))/3'

*'define pagp=re(pagp,0.5)'
*'define paccgp=re(paccgp,0.5)'
*'define pdjfgp=re(pdjfgp,0.5)'
*'define pmamgp=re(pmamgp,0.5)'
*'define pjjagp=re(pjjagp,0.5)'
*'define psongp=re(psongp,0.5)'
*'define pagp=re(pagp,0.5)'
*'define paccgp=re(paccgp,0.5)'

*******
'set dfile 3'
'set t 1 12'
'define p79cru=ave(pre/30,t+0,t=300,12)'
'define t79cru=ave(tmp,t+0,t=300,12)'
'modify p79cru seasonal'
'modify t79cru seasonal'
*'define p79cru=re(p79cru,0.5)'
*'define t79cru=re(t79cru,0.5)'

'set t 1'
'define pacru=(sum(p79cru,t=1,t=12))/12'
'define pacccru=sum((p79cru*30),t=1,t=12)'
'define tacru=(sum(t79cru,t=1,t=12))/12'
'define pdjfcru=(p79cru(t=12)+p79cru(t=1)+p79cru(t=2))/3'
'define pmamcru=(p79cru(t=3)+p79cru(t=4)+p79cru(t=5))/3'
'define pjjacru=(p79cru(t=6)+p79cru(t=7)+p79cru(t=8))/3'
'define psoncru=(p79cru(t=9)+p79cru(t=10)+p79cru(t=11))/3'
'define tdjfcru=(t79cru(t=12)+t79cru(t=1)+t79cru(t=2))/3'
'define tmamcru=(t79cru(t=3)+t79cru(t=4)+t79cru(t=5))/3'
'define tjjacru=(t79cru(t=6)+t79cru(t=7)+t79cru(t=8))/3'
'define tsoncru=(t79cru(t=9)+t79cru(t=10)+t79cru(t=11))/3'

*'define pacru=re(pacru,0.5)'
*'define pacccru=re(pacccru,0.5)'
*'define tacru=re(tacru,0.5)'
*'define pdfjcru=re(pdjfcru,0.5)'
*'define pmamcru=re(pmamcru,0.5)'
*'define pjjacru=re(pjjacru,0.5)'
*'define psoncru=re(psoncru,0.5)'
*'define tdfjcru=re(tdjfcru,0.5)'
*'define tmamcru=re(tmamcru,0.5)'
*'define tjjacru=re(tjjacru,0.5)'
*'define tsoncru=re(tsoncru,0.5)'

'set dfile 1'
'set t 1'

