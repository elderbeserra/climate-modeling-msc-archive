c ============================================================================
c Program: transforma_pdsi_near.f90
c Purpose: Transform near-future PDSI text outputs into binary grid format.
c Archive Context: MSc dissertation climate modeling workflow (historical archive).
c Inputs: Text or binary intermediate files produced by model post-processing stages.
c Outputs: Binary/text transformed files consumed by GrADS/control-file workflows.
c Path Configuration: Root paths are configurable and default to repository-relative directories.
c Notes:
c   - Core computational logic is preserved to keep reproducibility with original experiments.
c   - Update path variables before compilation/execution in a new environment.
c ============================================================================

PROGRAM pdsi_near
  INTEGER,PARAMETER :: l=86,c=75,xcount=385, ycount=225, npt=6450
  INTEGER           :: xc,yc,n,im,jm,t,env_status
  REAL              :: pdsi(75,86,300)
  CHARACTER(len=3)  :: x
  CHARACTER(len=3)  :: y
  CHARACTER(len=256):: near_pdsi_root
  CHARACTER(len=256):: output_file
  CHARACTER(len=512):: input_file
!
! Path configuration:
! - Set environment variable PDSI_NEAR_ROOT to override input root directory.
! - Set environment variable PDSI_NEAR_OUTPUT to override output binary path.
  near_pdsi_root = './data/agcm20/Brazil/near_future/PDSI'
  output_file = 'pdsi_near.bin'
  call get_environment_variable('PDSI_NEAR_ROOT', near_pdsi_root, status=env_status)
  call get_environment_variable('PDSI_NEAR_OUTPUT', output_file, status=env_status)
   do xc=385,459
     write(x,'(I3)')xc
     do yc=225,311
       write(y,'(I3)')yc
       n=(xc*xc)+(yc*yc)
!       write(*,*) x,y
       input_file = trim(near_pdsi_root)//'/'//trim(x)//trim(y)//'/monthly/self_cal/PDSI.clm'
       open(n,file=trim(input_file),STATUS='old')
       im=(xc-460)+(c+1)
       jm=(yc-311)+(l+1)
do t=1,300
       read(n,'(12x,f6.2)') pdsi(im,jm,t)
end do
!       matriz2(im,jm,t) = pdsi(t)
       close(n)
     end do
   end do
   OPEN(31,FILE=trim(output_file),   &
           STATUS="UNKNOWN",ACCESS="DIRECT",FORM="UNFORMATTED",RECL=l*c*300)
   WRITE(31,rec=1)pdsi
   close(31)
!
END PROGRAM pdsi_near
