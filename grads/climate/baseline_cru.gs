* ============================================================================
* Script: baseline_cru.gs
* Purpose: Build baseline climatology diagnostics from CRU references.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

'reinit'
* Configurable root paths (update for local environment)
data_root='./data'
cru_root=data_root%'/cru/monthly'
eta_root=data_root%'/eta/pnud'
'sdfopen 'cru_root'/cru_tmp_clim_1961-1990.nc'
'sdfopen 'cru_root'/cru_pre_clim_1961-1990.nc'
'open 'eta_root'/control_6190/climat_6190/media_6190.ctl'
'open 'eta_root'/simulation_1140/climat_1140/media_1140.ctl'
'open 'eta_root'/simulation_4170/climat_4170/media_4170.ctl'
'open 'eta_root'/simulation_7099/climat_7099/media_7099.ctl'

'set display color white'
'c'
'set mpdset mresbr'
'set map 1 1 5'
'set grads off'
'set csmooth on'

'set lat -18 1'
'set lon 312 326'

'define ta = ave(tmp,t=1,t=12)'


'define tdjf = (tmp(t=12) + tmp(t=1) + tmp(t=2))/3'
'define tmam = ave(tmp,t=3,t=5)'
'define tjja = ave(tmp,t=6,t=8)'
'define tson = ave(tmp,t=7,t=11)'

******PRECIP*

'define pa = ave(pre.2,t=1,t=12)/30.42'

'define pdjf = ((pre.2(t=12))/90 + (pre.2(t=1))/90 + (pre.2(t=2))/90)/3'
'define pmam = ave(pre.2,t=3,t=5)/92'
'define pjja = ave(pre.2,t=6,t=8)/92'
'define pson = ave(pre.2,t=7,t=11)/91'

'set gxout shaded'

******ETA*

'define taeta=tp2m.3(t=1)*0'
'define paeta=prec.3(t=1)*0'
'define eaeta=evpp.3(t=1)*0'
'define rzwaeta=uzrs.3(t=1)*0'
'define uswa=oces.3(t=1)*0'
'define dswa=ocis.3(t=1)*0'
'define ulwa=oles.3(t=1)*0'
'define dlwa=olis.3(t=1)*0'

'define taeta11=tp2m.4(t=1)*0'
'define paeta11=prec.4(t=1)*0'
'define eaeta11=evpp.4(t=1)*0'
'define rzwaeta11=uzrs.4(t=1)*0'
'define uswa11=oces.4(t=1)*0'
'define dswa11=ocis.4(t=1)*0'
'define ulwa11=oles.4(t=1)*0'
'define dlwa11=olis.4(t=1)*0'
'define taeta41=tp2m.5(t=1)*0'
'define paeta41=prec.5(t=1)*0'
'define eaeta41=evpp.5(t=1)*0'
'define rzwaeta41=uzrs.5(t=1)*0'
'define uswa41=oces.5(t=1)*0'
'define dswa41=ocis.5(t=1)*0'
'define ulwa41=oles.5(t=1)*0'
'define dlwa41=olis.5(t=1)*0'
'define taeta70=tp2m.6(t=1)*0'
'define paeta70=prec.6(t=1)*0'
*'define eaeta70=evpp.6(t=2)*0'

count=1
while (count<=360)
'define taeta=taeta+tp2m.3(t='count')/360'
'define paeta=paeta+prec.3(t='count')/360'
'define eaeta=eaeta+evpp.3(t='count')/360'
'define rzwaeta=rzwaeta+uzrs.3(t='count')/360'
'define uswa=uswa+oces.3(t='count')/360'
'define dswa=dswa+ocis.3(t='count')/360'
'define ulwa=ulwa+oles.3(t='count')/360'
'define dlwa=dlwa+olis.3(t='count')/360'
count=count+1
endwhile

count2=1
while (count2<=360)
'define taeta11=taeta11+tp2m.4(t='count2')/360'
'define paeta11=paeta11+prec.4(t='count2')/360'
'define eaeta11=eaeta11+evpp.4(t='count2')/360'
'define rzwaeta11=rzwaeta11+uzrs.4(t='count2')/360'
'define uswa11=uswa11+oces.4(t='count2')/360'
'define dswa11=dswa11+ocis.4(t='count2')/360'
'define ulwa11=ulwa11+oles.4(t='count2')/360'
'define dlwa11=dlwa11+olis.4(t='count2')/360'
count2=count2+1
endwhile

count3=1
while (count3<=360)
'define taeta41=taeta41+tp2m.5(t='count3')/360'
'define paeta41=paeta41+prec.5(t='count3')/360'
'define eaeta41=eaeta41+evpp.5(t='count3')/360'
'define rzwaeta41=rzwaeta41+uzrs.5(t='count3')/360'
'define uswa41=uswa41+oces.5(t='count3')/360'
'define dswa41=dswa41+ocis.5(t='count3')/360'
'define ulwa41=ulwa41+oles.5(t='count3')/360'
'define dlwa41=dlwa41+olis.5(t='count3')/360'

count3=count3+1
endwhile

count4=1
while (count4<=360)
'define taeta70=taeta70+tp2m.6(t='count4')/360'
'define paeta70=paeta70+prec.6(t='count4')/360'
*'define eaeta70=eaeta70+evpp.6(t='count4')/360'
count4=count4+1
endwhile

'define taeta=taeta-273'
'define paeta=paeta*1000'
'define eaeta=eaeta*1000'
'define rzwaeta=rzwaeta*100'

'define taeta11=taeta11-273'
'define paeta11=paeta11*1000'
'define eaeta11=eaeta11*1000'
'define rzwaeta11=rzwaeta11*100'

'define taeta41=taeta41-273'
'define paeta41=paeta41*1000'
'define eaeta41=eaeta41*1000'
'define rzwaeta41=rzwaeta41*100'

'define taeta70=taeta70-273'
'define paeta70=paeta70*1000'
*'define eaeta70=eaeta70*1000'
*
'define tdjfeta=tp2m.3(t=1)*0'
'define tmameta=tp2m.3(t=1)*0'
'define tjjaeta=tp2m.3(t=1)*0'
'define tsoneta=tp2m.3(t=1)*0'
'define pdjfeta=prec.3(t=1)*0'
'define pmameta=prec.3(t=1)*0'
'define pjjaeta=prec.3(t=1)*0'
'define psoneta=prec.3(t=1)*0'
'define edjfeta=evpp.3(t=1)*0'
'define emameta=evpp.3(t=1)*0'
'define ejjaeta=evpp.3(t=1)*0'
'define esoneta=evpp.3(t=1)*0'

'define tdjfeta11=tp2m.4(t=1)*0'
'define tmameta11=tp2m.4(t=1)*0'
'define tjjaeta11=tp2m.4(t=1)*0'
'define tsoneta11=tp2m.4(t=1)*0'
'define pdjfeta11=prec.4(t=1)*0'
'define pmameta11=prec.4(t=1)*0'
'define pjjaeta11=prec.4(t=1)*0'
'define psoneta11=prec.4(t=1)*0'
'define edjfeta11=evpp.4(t=1)*0'
'define emameta11=evpp.4(t=1)*0'
'define ejjaeta11=evpp.4(t=1)*0'
'define esoneta11=evpp.4(t=1)*0'

'define tdjfeta41=tp2m.5(t=1)*0'
'define tmameta41=tp2m.5(t=1)*0'
'define tjjaeta41=tp2m.5(t=1)*0'
'define tsoneta41=tp2m.5(t=1)*0'
'define pdjfeta41=prec.5(t=1)*0'
'define pmameta41=prec.5(t=1)*0'
'define pjjaeta41=prec.5(t=1)*0'
'define psoneta41=prec.5(t=1)*0'
'define edjfeta41=evpp.5(t=1)*0'
'define emameta41=evpp.5(t=1)*0'
'define ejjaeta41=evpp.5(t=1)*0'
'define esoneta41=evpp.5(t=1)*0'


'define tdjfeta70=tp2m.6(t=1)*0'
'define tmameta70=tp2m.6(t=1)*0'
'define tjjaeta70=tp2m.6(t=1)*0'
'define tsoneta70=tp2m.6(t=1)*0'
'define pdjfeta70=prec.6(t=1)*0'
'define pmameta70=prec.6(t=1)*0'
'define pjjaeta70=prec.6(t=1)*0'
'define psoneta70=prec.6(t=1)*0'

count = 1
while (count<=360)
'define tdjfeta=tdjfeta+(tp2m.3(t='count+11')+tp2m.3(t='count')+tp2m.3(t='count+1'))/(3*30)'
'define tmameta=tmameta+(tp2m.3(t='count+2')+tp2m.3(t='count+3')+tp2m.3(t='count+4'))/(3*30)'
'define tjjaeta=tjjaeta+(tp2m.3(t='count+5')+tp2m.3(t='count+6')+tp2m.3(t='count+7'))/(3*30)'
'define tsoneta=tsoneta+(tp2m.3(t='count+8')+tp2m.3(t='count+9')+tp2m.3(t='count+10'))/(3*30)'
'define pdjfeta=pdjfeta+(prec.3(t='count+11')+prec.3(t='count')+prec.3(t='count+1'))/(3*30)'
'define pmameta=pmameta+(prec.3(t='count+2')+prec.3(t='count+3')+prec.3(t='count+4'))/(3*30)'
'define pjjaeta=pjjaeta+(prec.3(t='count+5')+prec.3(t='count+6')+prec.3(t='count+7'))/(3*30)'
'define psoneta=psoneta+(prec.3(t='count+8')+prec.3(t='count+9')+prec.3(t='count+10'))/(3*30)'

'define edjfeta=edjfeta+(evpp.3(t='count+11')+evpp.3(t='count')+evpp.3(t='count+1'))/(3*30)'
'define emameta=emameta+(evpp.3(t='count+2')+evpp.3(t='count+3')+evpp.3(t='count+4'))/(3*30)'
'define ejjaeta=ejjaeta+(evpp.3(t='count+5')+evpp.3(t='count+6')+evpp.3(t='count+7'))/(3*30)'
'define esoneta=esoneta+(evpp.3(t='count+8')+evpp.3(t='count+9')+evpp.3(t='count+10'))/(3*30)'
count = count+12
endwhile

count2=1
while (count2<=360)
'define tdjfeta11=tdjfeta11+(tp2m.4(t='count2+11')+tp2m.4(t='count2')+tp2m.4(t='count2+1'))/(3*30)'
'define tmameta11=tmameta11+(tp2m.4(t='count2+2')+tp2m.4(t='count2+3')+tp2m.4(t='count2+4'))/(3*30)'
'define tjjaeta11=tjjaeta11+(tp2m.4(t='count2+5')+tp2m.4(t='count2+6')+tp2m.4(t='count2+7'))/(3*30)'
'define tsoneta11=tsoneta11+(tp2m.4(t='count2+8')+tp2m.4(t='count2+9')+tp2m.4(t='count2+10'))/(3*30)'
'define pdjfeta11=pdjfeta11+(prec.4(t='count2+11')+prec.4(t='count2')+prec.4(t='count2+1'))/(3*30)'
'define pmameta11=pmameta11+(prec.4(t='count2+2')+prec.4(t='count2+3')+prec.4(t='count2+4'))/(3*30)'
'define pjjaeta11=pjjaeta11+(prec.4(t='count2+5')+prec.4(t='count2+6')+prec.4(t='count2+7'))/(3*30)'
'define psoneta11=psoneta11+(prec.4(t='count2+8')+prec.4(t='count2+9')+prec.4(t='count2+10'))/(3*30)'

'define edjfeta11=edjfeta11+(evpp.4(t='count2+11')+evpp.4(t='count2')+evpp.4(t='count2+1'))/(3*30)'
'define emameta11=emameta11+(evpp.4(t='count2+2')+evpp.4(t='count2+3')+evpp.4(t='count2+4'))/(3*30)'
'define ejjaeta11=ejjaeta11+(evpp.4(t='count2+5')+evpp.4(t='count2+6')+evpp.4(t='count2+7'))/(3*30)'
'define esoneta11=esoneta11+(evpp.4(t='count2+8')+evpp.4(t='count2+9')+evpp.4(t='count2+10'))/(3*30)'

count2=count2+12
endwhile

count3=1
while (count3<=360)
'define tdjfeta41=tdjfeta41+(tp2m.5(t='count3+11')+tp2m.5(t='count3')+tp2m.5(t='count3+1'))/(3*30)'
'define tmameta41=tmameta41+(tp2m.5(t='count3+2')+tp2m.5(t='count3+3')+tp2m.5(t='count3+4'))/(3*30)'
'define tjjaeta41=tjjaeta41+(tp2m.5(t='count3+5')+tp2m.5(t='count3+6')+tp2m.5(t='count3+7'))/(3*30)'
'define tsoneta41=tsoneta41+(tp2m.5(t='count3+8')+tp2m.5(t='count3+9')+tp2m.5(t='count3+10'))/(3*30)'
'define pdjfeta41=pdjfeta41+(prec.5(t='count3+11')+prec.5(t='count3')+prec.5(t='count3+1'))/(3*30)'
'define pmameta41=pmameta41+(prec.5(t='count3+2')+prec.5(t='count3+3')+prec.5(t='count3+4'))/(3*30)'
'define pjjaeta41=pjjaeta41+(prec.5(t='count3+5')+prec.5(t='count3+6')+prec.5(t='count3+7'))/(3*30)'
'define psoneta41=psoneta41+(prec.5(t='count3+8')+prec.5(t='count3+9')+prec.5(t='count3+10'))/(3*30)'

'define edjfeta41=edjfeta41+(evpp.5(t='count3+11')+evpp.5(t='count3')+evpp.5(t='count3+1'))/(3*30)'
'define emameta41=emameta41+(evpp.5(t='count3+2')+evpp.5(t='count3+3')+evpp.5(t='count3+4'))/(3*30)'
'define ejjaeta41=ejjaeta41+(evpp.5(t='count3+5')+evpp.5(t='count3+6')+evpp.5(t='count3+7'))/(3*30)'
'define esoneta41=esoneta41+(evpp.5(t='count3+8')+evpp.5(t='count3+9')+evpp.5(t='count3+10'))/(3*30)'
count3=count3+12
endwhile

count4=1
while (count4<=360)
'define tdjfeta70=tdjfeta70+(tp2m.6(t='count4+11')+tp2m.6(t='count4')+tp2m.6(t='count4+1'))/(3*30)'
'define tmameta70=tmameta70+(tp2m.6(t='count4+2')+tp2m.6(t='count4+3')+tp2m.6(t='count4+4'))/(3*30)'
'define tjjaeta70=tjjaeta70+(tp2m.6(t='count4+5')+tp2m.6(t='count4+6')+tp2m.6(t='count4+7'))/(3*30)'
'define tsoneta70=tsoneta70+(tp2m.6(t='count4+8')+tp2m.6(t='count4+9')+tp2m.6(t='count4+10'))/(3*30)'
'define pdjfeta70=pdjfeta70+(prec.6(t='count4+11')+prec.6(t='count4')+prec.6(t='count4+1'))/(3*30)'
'define pmameta70=pmameta70+(prec.6(t='count4+2')+prec.6(t='count4+3')+prec.6(t='count4+4'))/(3*30)'
'define pjjaeta70=pjjaeta70+(prec.6(t='count4+5')+prec.6(t='count4+6')+prec.6(t='count4+7'))/(3*30)'
'define psoneta70=psoneta70+(prec.6(t='count4+8')+prec.6(t='count4+9')+prec.6(t='count4+10'))/(3*30)'
count4=count4+12
endwhile

'define tdjfeta=tdjfeta-273'
'define tmameta=tmameta-273'
'define tjjaeta=tjjaeta-273'
'define tsoneta=tsoneta-273'
'define pdjfeta=pdjfeta*1000'
'define pmameta=pmameta*1000'
'define pjjaeta=pjjaeta*1000'
'define psoneta=psoneta*1000'
'define edjfeta=edjfeta*1000'
'define emameta=emameta*1000'
'define ejjaeta=ejjaeta*1000'
'define esoneta=esoneta*1000'

'define tdjfeta11=tdjfeta11-273'
'define tmameta11=tmameta11-273'
'define tjjaeta11=tjjaeta11-273'
'define tsoneta11=tsoneta11-273'
'define pdjfeta11=pdjfeta11*1000'
'define pmameta11=pmameta11*1000'
'define pjjaeta11=pjjaeta11*1000'
'define psoneta11=psoneta11*1000'
'define edjfeta11=edjfeta11*1000'
'define emameta11=emameta11*1000'
'define ejjaeta11=ejjaeta11*1000'
'define esoneta11=esoneta11*1000'

'define tdjfeta41=tdjfeta41-273'
'define tmameta41=tmameta41-273'
'define tjjaeta41=tjjaeta41-273'
'define tsoneta41=tsoneta41-273'
'define pdjfeta41=pdjfeta41*1000'
'define pmameta41=pmameta41*1000'
'define pjjaeta41=pjjaeta41*1000'
'define psoneta41=psoneta41*1000'
'define edjfeta41=edjfeta41*1000'
'define emameta41=emameta41*1000'
'define ejjaeta41=ejjaeta41*1000'
'define esoneta41=esoneta41*1000'


'define tdjfeta70=tdjfeta70-273'
'define tmameta70=tmameta70-273'
'define tjjaeta70=tjjaeta70-273'
'define tsoneta70=tsoneta70-273'
'define pdjfeta70=pdjfeta70*1000'
'define pmameta70=pmameta70*1000'
'define pjjaeta70=pjjaeta70*1000'
'define psoneta70=psoneta70*1000'

**********************************************************
*******REGRID*******
********************

'define ta = regrid2(ta,0.5)'
'define taeta = regrid2(taeta,0.5)'
'define taeta11 = regrid2(taeta11,0.5)'
'define taeta41 = regrid2(taeta41,0.5)'
'define taeta70 = regrid2(taeta70,0.5)'
'define pa = regrid2(pa,0.5)'
'define paeta = regrid2(paeta,0.5)'
'define paeta11 = regrid2(paeta11,0.5)'
'define paeta41 = regrid2(paeta41,0.5)'
'define paeta70 = regrid2(paeta70,0.5)'
'define eaeta = regrid2(eaeta,0.5)'
'define eaeta11 = regrid2(eaeta11,0.5)'
'define eaeta41 = regrid2(eaeta41,0.5)'
*'define eaeta70 = regrid2(eaeta70,0.5)'
'define rzwaeta = regrid2(rzwaeta,0.5)'
'define rzwaeta11 = regrid2(rzwaeta11,0.5)'
'define rzwaeta41 = regrid2(rzwaeta41,0.5)'
'define uswa = regrid2(uswa,0.5)'
'define uswa11 = regrid2(uswa11,0.5)'
'define uswa41 = regrid2(uswa41,0.5)'
'define dswa = regrid2(dswa,0.5)'
'define dswa11 = regrid2(dswa11,0.5)'
'define dswa41 = regrid2(dswa41,0.5)'
'define ulwa = regrid2(ulwa,0.5)'
'define ulwa11 = regrid2(ulwa11,0.5)'
'define ulwa41 = regrid2(ulwa41,0.5)'
'define dlwa = regrid2(dlwa,0.5)'
'define dlwa11 = regrid2(dlwa11,0.5)'
'define dlwa41 = regrid2(dlwa41,0.5)'


'define tdjf = regrid2(tdjf,0.5)'
'define tdjfeta = regrid2(tdjfeta,0.5)'
'define tdjfeta11 = regrid2(tdjfeta11,0.5)'
'define tdjfeta41 = regrid2(tdjfeta41,0.5)'
'define tdjfeta70 = regrid2(tdjfeta70,0.5)'
'define pdjf = regrid2(pdjf,0.5)'
'define pdjfeta = regrid2(pdjfeta,0.5)'
'define pdjfeta11 = regrid2(pdjfeta11,0.5)'
'define pdjfeta41 = regrid2(pdjfeta41,0.5)'
'define pdjfeta70 = regrid2(pdjfeta70,0.5)'
'define edjfeta = regrid2(edjfeta,0.5)'
'define edjfeta11 = regrid2(edjfeta11,0.5)'
'define edjfeta41 = regrid2(edjfeta41,0.5)'


'define tmam = regrid2(tmam,0.5)'
'define tmameta = regrid2(tmameta,0.5)'
'define tmameta11 = regrid2(tmameta11,0.5)'
'define tmameta41 = regrid2(tmameta41,0.5)'
'define tmameta70 = regrid2(tmameta70,0.5)'
'define pmam = regrid2(pmam,0.5)'
'define pmameta = regrid2(pmameta,0.5)'
'define pmameta11 = regrid2(pmameta11,0.5)'
'define pmameta41 = regrid2(pmameta41,0.5)'
'define pmameta70 = regrid2(pmameta70,0.5)'
'define emameta = regrid2(emameta,0.5)'
'define emameta11 = regrid2(emameta11,0.5)'
'define emameta41 = regrid2(emameta41,0.5)'


'define tjja = regrid2(tjja,0.5)'
'define tjjaeta = regrid2(tjjaeta,0.5)'
'define tjjaeta11 = regrid2(tjjaeta11,0.5)'
'define tjjaeta41 = regrid2(tjjaeta41,0.5)'
'define tjjaeta70 = regrid2(tjjaeta70,0.5)'
'define pjja = regrid2(pjja,0.5)'
'define pjjaeta = regrid2(pjjaeta,0.5)'
'define pjjaeta11 = regrid2(pjjaeta11,0.5)'
'define pjjaeta41 = regrid2(pjjaeta41,0.5)'
'define pjjaeta70 = regrid2(pjjaeta70,0.5)'
'define ejjaeta = regrid2(ejjaeta,0.5)'
'define ejjaeta11 = regrid2(ejjaeta11,0.5)'
'define ejjaeta41 = regrid2(ejjaeta41,0.5)'


'define tson = regrid2(tson,0.5)'
'define tsoneta = regrid2(tsoneta,0.5)'
'define tsoneta11 = regrid2(tsoneta11,0.5)'
'define tsoneta41 = regrid2(tsoneta41,0.5)'
'define tsoneta70 = regrid2(tsoneta70,0.5)'
'define pson = regrid2(pson,0.5)'
'define psoneta = regrid2(psoneta,0.5)'
'define psoneta11 = regrid2(psoneta11,0.5)'
'define psoneta41 = regrid2(psoneta41,0.5)'
'define psoneta70 = regrid2(psoneta70,0.5)'
'define esoneta = regrid2(esoneta,0.5)'
'define esoneta11 = regrid2(esoneta11,0.5)'
'define esoneta41 = regrid2(esoneta41,0.5)'


*******
*
'define neta = uswa+dswa+ulwa+dlwa'
'define neta11 = uswa11+dswa11+ulwa11+dlwa11'
'define neta41 = uswa41+dswa41+ulwa41+dlwa41'



