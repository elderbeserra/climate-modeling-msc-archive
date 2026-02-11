# Climate Modeling & Diagnostic Workflows (MSc Archive)

**Scientific computing portfolio demonstrating Fortran-based data processing, batch orchestration, and climate diagnostic workflows.**

This repository serves as a historical research archive of the computational code developed for my MSc dissertation in Meteorology at the National Institute for Space Research (INPE). It focuses on drought diagnostics (PDSI), post-processing of super-high-resolution Global Climate Model (GCM) outputs, and semi-arid boundary validation in Northeast Brazil.

## Dissertation Context

**Title:** *Projections of Aridity and Semi-Arid Boundaries in Northeast Brazil for the XXI Century in a Global Warming Scenario*
**Institution:** National Institute for Space Research (INPE)
**Author:** Elder Almeida Beserra
**Advisor:** Dr. José Antonio Marengo Orsini

The research assessed hydroclimate stress and the expansion of semi-arid regions under IPCC SRES A1B emission scenarios. The study utilized the **MRI-AGCM3.1s**, a super-high-resolution global climate model (20km horizontal mesh) developed by the Meteorological Research Institute (Japan).

**Key Computational Challenges:**
*   Processing massive volumetric datasets from high-resolution global simulations (20km grid).
*   Implementing complex hydrological algorithms (Penman-Monteith, Palmer Drought Severity Index) from scratch in Fortran.
*   Analyzing multi-decadal time slices: Present (1979-2003), Near Future (2015-2039), and Far Future (2075-2099).

**Source:** [INPE MSc Dissertation (2012)](http://mtc-m16d.sid.inpe.br/col/sid.inpe.br/mtc-m19/2012/03.15.15.49/doc/publicacao.pdf)

## Technical Portfolio & HPC Relevance

This archive is preserved to demonstrate technical competencies relevant to **High Performance Computing (HPC)** and **Scientific Software Engineering**, specifically:

*   **Scientific Programming (Fortran):** Implementation of mathematical models for potential evapotranspiration (FAO-56 Penman-Monteith) and the soil-water balance algorithm required for the PDSI.
*   **Data Intensive Workflows:** Handling structured atmospheric datasets in complex binary formats (IEEE 754 floating-point) and GRIB/NetCDF standards.
*   **Legacy Code Interoperability:** Bridging numerical analysis tools (GrADS/OpenGrADS) with custom Fortran binaries.
*   **Batch Automation:** Orchestration of sequential data pipelines using C-Shell scripting to manage memory and disk I/O for large time-series.

## Technology Stack

| Component | Technology | Role in Workflow |
| :--- | :--- | :--- |
| **Core Logic** | **Fortran 77/90** | Binary data ingestion, heavy numerical calculations (PDSI, Water Balance), and array transformations. |
| **Orchestration** | **C-Shell (csh)** | Batch processing scripts to manage file-system operations and sequential execution of climate models. |
| **Visualization** | **GrADS** | Grid Analysis and Display System for rendering geospatial data and diagnostic plots (bias correction, anomaly detection). |
| **Data Formats** | **Binary, NetCDF** | Handling raw model output streams and self-describing formats. |

## Repository Structure

The codebase is organized by workflow stage:

*   **fortran/**
    *   `data_transform/`: Raw binary-to-ASCII and ASCII-to-Binary converters for inter-process communication.
    *   `utils/`: Numerical routines for variable adjustment (e.g., converting spectral model output to physical grid).
*   **grads/**
    *   `pdsi/`: Scripts for visualizing drought indices and exporting aggregations.
    *   `validation/`: Model-vs-observation bias analysis (comparing MRI-AGCM3.1s against CRU and INMET station data).
    *   `climate/`: General circulation diagnostics (Precipitation, Temperature, Evapotranspiration).
*   **shell/**
    *   `pdsi/`: Wrapper scripts that drive the Fortran executables in batch loops.
*   **control_files/**
    *   GrADS `.ctl` descriptors defining the geometry (X, Y, Z, T) of binary datasets.

## Workflow Logic

A typical execution pipeline for this research involved:

1.  **Preprocessing:** Shell scripts separate continuous GCM output into monthly time-slices and isolate the Northeast Brazil domain (lat/lon subsetting).
2.  **Calculation:** Fortran binaries read the time-slices, apply the Thornthwaite/Penman-Monteith equations, and solve the PDSI soil-water balance algorithm recursively.
3.  **Post-processing:** Resulting binary fields are wrapped in `.ctl` descriptors.
4.  **Diagnostics:** GrADS scripts generate spatial maps for semi-arid boundary shifts (Isohyets, Aridity Indices).

## Usage & Path Configuration

*Note: This is a code portfolio. Execution requires specific input datasets (MRI-AGCM3.1s outputs and CRU observations) not included here due to size and licensing.*

To examine the logic or attempt reproduction with your own data:

1.  **Environment:** Requires `gfortran`, `csh`, and `opengrads`.
2.  **Path Abstraction:**
    *   Scripts utilize relative paths where possible.
    *   Legacy absolute paths for "Home" or "Data" roots can be overridden via environment variables (e.g., `CLIMATE_DATA_ROOT`).
3.  **Compilation:** Fortran sources in `fortran/` should be compiled individually. No `Makefile` is provided as these were originally run as ad-hoc research scripts.

## License

This project is open-sourced under the **GNU General Public License v3.0**. See `LICENSE` for details.