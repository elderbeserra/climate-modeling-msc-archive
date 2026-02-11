* ============================================================================
* Script: clima_1140_eta.gs
* Purpose: Generate climatological fields for ETA model experiment window.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

###########################################################
### THIS SCRIPT COMPUTES THE 1961-1990 CLIMATOLOGY FROM MODEL DATA#
### USING MONTHLY MEANS FOR EACH YEAR ########################
#### J F PESQUERO 11/07 ###################################

# Control file with monthly mean values for each year
* Configurable root path for ETA climatology input
eta_climat_root='./data/eta_hc1/climat_1140'
'open 'eta_climat_root'/media_1140.ctl'
'set gxout fwrite'
'q file'

* coleta o nome de todas as variaveis do ctl
i=7
while(i<=44)
lin=sublin(result,i)
var.i=subwrd(lin,1)
say var.i
i=i+1
endwhile

* Computes each month from initial t to final t with a 12-month interval
j=1
while(j<=12)
 if(j<=9);j='0'j;endif
'set fwrite ../normal_1140/normal_'j'_1140.dat'
* primeiro as variaveis sem niveis
i=7
while(i<=37)
say 'd ave('var.i',t='j',t=360,12)'
 'd ave('var.i',t='j',t=360,12)'
 i=i+1
endwhile
* agora as variaveis com niveis.
i=38
while(i<=44)
say 'd ave('var.i',t='j'(lev=1000),t=360,12)'
 'd ave('var.i'(lev=1000),t='j',t=360,12)'
 'd ave('var.i'(lev=925),t='j',t=360,12)'
 'd ave('var.i'(lev=850),t='j',t=360,12)' 
 'd ave('var.i'(lev=800),t='j',t=360,12)'
 'd ave('var.i'(lev=700),t='j',t=360,12)'
 'd ave('var.i'(lev=600),t='j',t=360,12)'
 'd ave('var.i'(lev=500),t='j',t=360,12)'
 'd ave('var.i'(lev=400),t='j',t=360,12)'
 'd ave('var.i'(lev=300),t='j',t=360,12)' 
 'd ave('var.i'(lev=250),t='j',t=360,12)'
 'd ave('var.i'(lev=200),t='j',t=360,12)'
 'd ave('var.i'(lev=150),t='j',t=360,12)'
 'd ave('var.i'(lev=100),t='j',t=360,12)'
 i=i+1
endwhile
'disable fwrite'
j=j+1
endwhile
'quit'



  
 
