# Fortran Programs

Legacy Fortran programs used in the dissertation workflow.

- `data_transform/`: programs that convert processed text outputs to binary files used by GrADS.
- `utils/`: support utilities for specific post-processing tasks.

Compilation guidance (example):

```bash
gfortran -O2 -o transforma_pdsi_near fortran/data_transform/transforma_pdsi_near.f90
gfortran -O2 -o transforma_pdsi_future fortran/data_transform/transforma_pdsi_future.f90
```
