# Climate Modeling MSc Archive

Archive repository with auxiliary scripts used during an MSc dissertation in climate modeling, with focus on drought diagnostics (PDSI), climate variable post-processing, and validation workflows for Brazil (including semi-arid regions).

This repository is intentionally preserved as a **historical research archive**. Scripts are organized and documented for discoverability, but computational logic was kept close to original workflow behavior.

## Dissertation Context

This archive supports the MSc dissertation by Elder Almeida Beserra on aridity projections and semi-arid boundary changes in Northeast Brazil under global warming scenarios.

Main research context adapted from the author CV and dissertation:
- Quantitative climate-impact research using high-performance computational workflows and global climate model outputs for IPCC SRES A1B scenario analysis.
- Large-scale processing of structured atmospheric datasets in complex binary formats, including NetCDF and GRIB/GRIB2.
- Development and maintenance of data-processing scripts in Fortran and shell/GrADS workflows for extraction, transformation, and diagnostics of atmospheric variables.
- Implementation of aridity and drought indices, together with precipitation-extreme metrics, to characterize hydroclimate stress evolution.
- Execution of model-vs-observation comparison pipelines with grid-level bias-aware diagnostics.

Primary source: [INPE MSc Dissertation (2012)](http://mtc-m16d.sid.inpe.br/col/sid.inpe.br/mtc-m19/2012/03.15.15.49/doc/publicacao.pdf)

## Repository Structure

- `grads/`: GrADS scripts grouped by domain (`pdsi`, `climate`, `validation`, `utils`).
- `fortran/`: Fortran programs for transformation and utility processing.
- `shell/`: C-shell batch orchestration scripts for PDSI workflows.
- `control_files/`: GrADS `.ctl` descriptor files for binary datasets.
- `examples/`: Archived test/example scripts used during development.
- `docs/`: Workflow-level documentation.

## Requirements

- GrADS / OpenGrADS
- Fortran compiler (`gfortran` recommended)
- C-shell (`csh`) for legacy orchestration scripts
- Access to climate model and observational input datasets expected by each script

## Important Archive Notes

- Many scripts still include environment-specific absolute paths.
- Before running scripts, adapt paths to your local machine and data layout.
- Script names were intentionally preserved to maintain traceability with dissertation artifacts.

## Path Configuration Abstraction

- Default path roots are now relative to the repository (for example `./data` and `./output`).
- You can override shell-script data root with `CLIMATE_DATA_ROOT`.
- You can override legacy home-root references with `CLIMATE_HOME_ROOT` when needed.
- You can override Fortran transform roots with:
  - `PDSI_NEAR_ROOT`, `PDSI_NEAR_OUTPUT`
  - `PDSI_FUTURE_ROOT`, `PDSI_FUTURE_OUTPUT`

## Quick Start

1. Read `docs/WORKFLOWS.md` to understand typical pipeline order.
2. Inspect script headers for purpose, inputs, and outputs.
3. Update hardcoded paths in scripts to match your local data directories.
4. Run scripts incrementally (small subsets first) and validate generated outputs.

## Script Categories

### GrADS
- `grads/pdsi/`: PDSI aggregation and exports.
- `grads/climate/`: precipitation, temperature, and climate diagnostics.
- `grads/validation/`: model-vs-observation checks.
- `grads/utils/`: plotting and helper utilities.

### Fortran
- `fortran/data_transform/`: transform monthly PDSI text inputs into binary artifacts.
- `fortran/utils/`: utility processors.

### Shell
- `shell/pdsi/`: batch loop execution and directory preparation for PDSI runs.
- `shell/utils/`: cleanup and helper scripts.

- Script-by-script reference: `docs/SCRIPTS_REFERENCE.md`

## Data Expectations

Scripts assume pre-existing datasets generated outside this repository, such as:
- AGCM outputs
- Observational NetCDF datasets
- Intermediate monthly text files for PDSI tools

The repository does not ship those datasets.

## License

GNU General Public License v3.0 (see `LICENSE`).
