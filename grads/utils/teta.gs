* ============================================================================
* Script: teta.gs
* Purpose: Compute or visualize theta-related thermodynamic diagnostics.
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
'open 'data_root'/cru/CRU_TS_3.0/cru_ts3_1979-2003.ctl'

'set display color white'
'c'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'
'set lat -18 -2'
'set lon 312 326'

'set t 1 12'
'define pcru=ave((pre/30),t+0,t=300,12)'
'define tcru=ave(tmp,t+0,t=300,12)'
'modify pcru seasonal'
'modify tcru seasonal'

'set t 1'
'define pacru=(sum(pcru,t=1,t=12))/12'
'define pacccru=(sum(pcru,t=1,t=12))'
'define tacru=(sum(tcru,t=1,t=12))/12'
'define pdjfcru=(pcru(t=12)+pcru(t=1)+pcru(t=2))/3'
'define pmamcru=(pcru(t=3)+pcru(t=4)+pcru(t=5))/3'
'define pjjacru=(pcru(t=6)+pcru(t=7)+pcru(t=8))/3'
'define psoncru=(pcru(t=9)+pcru(t=10)+pcru(t=11))/3'
'define tdjfcru=(tcru(t=12)+tcru(t=1)+tcru(t=2))/3'
'define tmamcru=(tcru(t=3)+tcru(t=4)+tcru(t=5))/3'
'define tjjacru=(tcru(t=6)+tcru(t=7)+tcru(t=8))/3'
'define tsoncru=(tcru(t=9)+tcru(t=10)+tcru(t=11))/3'


  'define trajancru = (tcru(t='1'))/5'
  'define trafebcru = (tcru(t='2'))/5'
  'define tramarcru = (tcru(t='3'))/5'
  'define traaprcru = (tcru(t='4'))/5'
  'define tramaycru = (tcru(t='5'))/5'
  'define trajuncru = (tcru(t='6'))/5'
  'define trajulcru = (tcru(t='7'))/5'
  'define traaugcru = (tcru(t='8'))/5'
  'define trasepcru = (tcru(t='9'))/5'
  'define traoctcru = (tcru(t='10'))/5'
  'define tranovcru = (tcru(t='11'))/5'
  'define tradeccru = (tcru(t='12'))/5'
  'define ratiojancru = pow(trajancru,1.5)'
  'define ratiofebcru = pow(trafebcru,1.5)'
  'define ratiomarcru = pow(tramarcru,1.5)'
  'define ratioaprcru = pow(traaprcru,1.5)'
  'define ratiomaycru = pow(tramaycru,1.5)'
  'define ratiojuncru = pow(trajuncru,1.5)'
  'define ratiojulcru = pow(trajulcru,1.5)'
  'define ratioaugcru = pow(traaugcru,1.5)'
  'define ratiosepcru = pow(trasepcru,1.5)'
  'define ratiooctcru = pow(traoctcru,1.5)'
  'define rationovcru = pow(tranovcru,1.5)'
  'define ratiodeccru = pow(tradeccru,1.5)'

'define ratiocru = (ratiojancru+ratiofebcru+ratiomarcru+ratioaprcru+ratiomaycru+ratiojuncru+ratiojulcru+ratioaugcru+ratiosepcru+ratiooctcru+rationovcru+ratiodeccru)'
'define icru = ratiocru'
'define acru = ((0.49)+(0.0179*icru)-(0.0000771*pow(icru,2))+(0.000000675*(icru*icru)))'


*  'define p'subwrd(str,m)'cru = pcru(t='m')'

  'define tjancru = tcru(t='1')'
  'define tfebcru = tcru(t='2')'
  'define tmarcru = tcru(t='3')'
  'define taprcru = tcru(t='4')'
  'define tmaycru = tcru(t='5')'
  'define tjuncru = tcru(t='6')'
  'define tjulcru = tcru(t='7')'
  'define taugcru = tcru(t='8')'
  'define tsepcru = tcru(t='9')'
  'define toctcru = tcru(t='10')'
  'define tnovcru = tcru(t='11')'
  'define tdeccru = tcru(t='12')'

'define petthjancru = 1.6*pow(((10*tjancru)/icru),acru)'
'define petthfebcru = 1.6*pow(((10*tfebcru)/icru),acru)'
'define petthmarcru = 1.6*pow(((10*tmarcru)/icru),acru)'
'define petthaprcru = 1.6*pow(((10*taprcru)/icru),acru)'
'define petthmaycru = 1.6*pow(((10*tmaycru)/icru),acru)'
'define petthjuncru = 1.6*pow(((10*tjuncru)/icru),acru)'
'define petthjulcru = 1.6*pow(((10*tjulcru)/icru),acru)'
'define petthaugcru = 1.6*pow(((10*taugcru)/icru),acru)'
'define petthsepcru = 1.6*pow(((10*tsepcru)/icru),acru)'
'define petthoctcru = 1.6*pow(((10*toctcru)/icru),acru)'
'define petthnovcru = 1.6*pow(((10*tnovcru)/icru),acru)'
'define petthdeccru = 1.6*pow(((10*tdeccru)/icru),acru)'

'define petthcru = (petthjancru+petthfebcru+petthmarcru+petthaprcru+petthmaycru+petthjuncru+petthjulcru+petthaugcru+petthsepcru+petthoctcru+petthnovcru+petthdeccru)/12'

'define petthcru = regrid2(petthcru,0.5)'
'define pacru = regrid2(pacru,0.5)'
