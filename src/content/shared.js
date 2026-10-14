// Data that is the same in both languages.

// Paste the video link here when it is ready, e.g. 'https://youtu.be/...'
export const videoUrl = ''

export const teamName = 'The Shadow Brokers'

// Ordered along the project pipeline: research → data → modelling → web.
// `role` is a key; the role titles live in en.js / ar.js.
export const team = [
  { name: 'Hadi Mousa', initials: 'HM', role: 'research' },
  { name: 'Yousef Abu Baker', initials: 'YA', role: 'collection' },
  { name: 'Adnan Odeh', initials: 'AO', role: 'cleaning' },
  { name: 'Adel Ibdah', initials: 'AI', role: 'ml' },
  { name: 'Qusai Taslaq', initials: 'QT', role: 'web' },
  { name: 'Yazan Abu Baker', initials: 'YA', role: 'web' },
]

// References stay in English (APA style) in both languages.
export const references = [
  'Copernicus Atmosphere Monitoring Service. (n.d.). <em>Drifting away from MODIS in the CAMS Global Fire Assimilation System</em>. <a href="https://atmosphere.copernicus.eu/drifting-away-modis-cams-global-fire-assimilation-system" target="_blank" rel="noopener">https://atmosphere.copernicus.eu/drifting-away-modis-cams-global-fire-assimilation-system</a>',
  'Csiszar, I., Schroeder, W., Giglio, L., Ellicott, E., Vadrevu, K. P., Justice, C. O., &amp; Wind, B. (2014). Active fires from the Suomi NPP Visible Infrared Imaging Radiometer Suite: Product status and first evaluation results. <em>Journal of Geophysical Research: Atmospheres, 119</em>(2), 803–816. <a href="https://doi.org/10.1002/2013JD020453" target="_blank" rel="noopener">https://doi.org/10.1002/2013JD020453</a>',
  'Fu, Y., Li, R., Wang, X., Bergeron, Y., Valeria, O., Chavardès, R. D., Wang, Y., &amp; Hu, J. (2020). Fire detection and fire radiative power in forests and low-biomass lands in Northeast Asia: MODIS versus VIIRS fire products. <em>Remote Sensing, 12</em>(18), 2870. <a href="https://doi.org/10.3390/rs12182870" target="_blank" rel="noopener">https://doi.org/10.3390/rs12182870</a>',
  'Giglio, L., Boschetti, L., Roy, D. P., Hall, J. V., Zubkova, M., Humber, M., Huang, H., &amp; Oles, V. (2025). The NASA VIIRS burned area product, global validation, and intercomparison with the NASA MODIS burned area product. <em>Remote Sensing of Environment, 331</em>, 115006. <a href="https://doi.org/10.1016/j.rse.2025.115006" target="_blank" rel="noopener">https://doi.org/10.1016/j.rse.2025.115006</a>',
  'Giglio, L., Schroeder, W., &amp; Justice, C. O. (2016). The Collection 6 MODIS active fire detection algorithm and fire products. <em>Remote Sensing of Environment, 178</em>, 31–41. <a href="https://doi.org/10.1016/j.rse.2016.02.054" target="_blank" rel="noopener">https://doi.org/10.1016/j.rse.2016.02.054</a>',
  'Kaur, I., Hüser, I., Zhang, T., Gehrke, B., &amp; Kaiser, J. W. (2019). Correcting swath-dependent bias of MODIS FRP observations with quantile mapping. <em>Remote Sensing, 11</em>(10), 1205. <a href="https://doi.org/10.3390/rs11101205" target="_blank" rel="noopener">https://doi.org/10.3390/rs11101205</a>',
  'Li, F., Zhang, X., Kondragunta, S., &amp; Csiszar, I. (2018). Comparison of fire radiative power estimates from VIIRS and MODIS observations. <em>Journal of Geophysical Research: Atmospheres, 123</em>, 4545–4563. <a href="https://doi.org/10.1029/2017JD027823" target="_blank" rel="noopener">https://doi.org/10.1029/2017JD027823</a>',
  'LP DAAC. (n.d.). <em>VIIRS Active Fire Product User\'s Guide (VNP14)</em>. <a href="https://lpdaac.usgs.gov/documents/427/VNP14_User_Guide_V1.pdf" target="_blank" rel="noopener">https://lpdaac.usgs.gov/documents/427/VNP14_User_Guide_V1.pdf</a>',
  'NASA Applied Sciences. (2025). <em>FIRMS 2025 Q&amp;A Session, Part 3</em>. <a href="https://appliedsciences.nasa.gov/sites/default/files/2025-05/Part%203%20FIRMS%202025%20Q&amp;A%20Session.docx.pdf" target="_blank" rel="noopener">https://appliedsciences.nasa.gov/sites/default/files/2025-05/Part%203%20FIRMS%202025%20Q&amp;A%20Session.docx.pdf</a>',
  'NASA Earth Observatory. (n.d.). <em>A clearer view of fire</em>. <a href="https://science.nasa.gov/?p=1142783" target="_blank" rel="noopener">https://science.nasa.gov/?p=1142783</a>',
  'NASA FIRMS. (n.d.). <em>Fire alerts: Important notes</em>. <a href="https://firms.modaps.eosdis.nasa.gov/alerts/notes.php" target="_blank" rel="noopener">https://firms.modaps.eosdis.nasa.gov/alerts/notes.php</a>',
  'Schroeder, W., Oliva, P., Giglio, L., &amp; Csiszar, I. A. (2014). The new VIIRS 375 m active fire detection data product: Algorithm description and initial assessment. <em>Remote Sensing of Environment, 143</em>, 85–96. <a href="https://doi.org/10.1016/j.rse.2013.12.008" target="_blank" rel="noopener">https://doi.org/10.1016/j.rse.2013.12.008</a>',
  'Vadrevu, K., &amp; Lasko, K. (2018). Intercomparison of MODIS Aqua and VIIRS I-band fires and emissions in an agricultural landscape: Implications for air pollution research. <em>Remote Sensing, 10</em>(7), 978. <a href="https://doi.org/10.3390/rs10070978" target="_blank" rel="noopener">https://doi.org/10.3390/rs10070978</a>',
  'Zheng, Y., Ding, K., Xue, L., Wang, Z., Jiao, G., Zhu, Y., Zhang, J., &amp; Ren, Q. (2026). Fire radiative power correction and spatiotemporal fusion based on MYD14 and VNP14IMG. <em>Remote Sensing, 18</em>(10), 1650. <a href="https://doi.org/10.3390/rs18101650" target="_blank" rel="noopener">https://doi.org/10.3390/rs18101650</a>',
]
