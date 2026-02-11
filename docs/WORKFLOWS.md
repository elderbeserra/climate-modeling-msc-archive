# Archive Workflows

This document summarizes common legacy execution flows observed in this repository.

## 1) PDSI Processing Pipeline

1. Prepare per-grid folder structures with scripts under `shell/pdsi/pdsi_folders*.csh`.
2. Generate or export monthly climate text inputs with GrADS scripts (mostly in `grads/pdsi/` and `grads/climate/`).
3. Execute PDSI batch runs with `shell/pdsi/roda_pdsi.csh` or `shell/pdsi/roda_pdsi_near.csh`.
4. Transform generated outputs to binary formats via Fortran programs in `fortran/data_transform/`.
5. Read transformed binaries using descriptor files in `control_files/`.

## 2) Climate Validation Workflow

1. Open model and observational datasets via scripts in `grads/validation/`.
2. Interpolate/regrid fields as needed in GrADS.
3. Produce diagnostics and maps through scripts in `grads/utils/`.

## 3) Plotting and Reporting Workflow

1. Select target period/domain via GrADS `set lat/lon/t` directives.
2. Run scripts in `grads/utils/` for quick plots or publication-style outputs.
3. Export final figures and derived text files to user-defined output paths.

## Operational Guidance

- Run scripts in small batches first to validate path configuration.
- Keep a local copy of your adapted scripts if you need environment-specific path edits.
- Prefer documenting local path assumptions before reproducing old runs.
