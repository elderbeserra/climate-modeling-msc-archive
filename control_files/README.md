# GrADS Control Files

This directory stores `.ctl` descriptor files used by GrADS to interpret generated binary datasets.

These files define:
- Dataset location and format (`DSET`)
- Undefined values (`UNDEF`)
- Domain dimensions (`XDEF`, `YDEF`, `ZDEF`, `TDEF`)
- Available variables (`VARS`)

If file paths or binary file names change, update the corresponding `.ctl` entries before plotting or analysis.
