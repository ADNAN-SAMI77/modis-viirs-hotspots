// English content. The team's texts are kept exactly as written.
// Strings named `html` may contain simple HTML tags (<strong>, <em>, <a>).

const en = {
  meta: { title: 'Harmonization of MODIS and VIIRS Hot Spots', dir: 'ltr' },

  toggle: { label: 'العربية', labelLang: 'ar', aria: 'Switch the page to Arabic' },

  nav: [
    { id: 'idea', label: 'Idea' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'tools', label: 'Tools' },
    { id: 'team', label: 'Team' },
    { id: 'future', label: 'Benefits & Future' },
    { id: 'validation', label: 'Validation' },
    { id: 'references', label: 'References' },
  ],

  hero: {
    kicker: 'NASA Space Apps Challenge 2026',
    titleHtml: 'Harmonization of <span class="m">MODIS</span> and <span class="v">VIIRS</span> Hot Spots',
    altTitle: '',
    sub: 'A web app that produces a single burning activity calendar by combining the MODIS and VIIRS active fire records.',
    by: 'By',
    videoPending: 'Video: link to be added',
    videoLabel: 'Watch the video',
    facts: [
      { v: '1,000 m', l: 'MODIS pixel' },
      { v: '375 m', l: 'VIIRS pixel' },
      { v: '2012', l: 'Sensor overlap begins' },
      { v: '5', l: 'Stages' },
    ],
  },

  placeholderTag: 'Placeholder',

  figure: {
    aria: 'One MODIS pixel of 1,000 m overlaid with the 375 m VIIRS pixel grid, drawn to scale',
    small: '375 m',
    large: '1,000 m',
    caption: 'Drawn to scale: one MODIS pixel (1,000 m) overlaid with the VIIRS pixel grid (375 m).',
    keyModis: 'MODIS pixel, 1,000 m',
    keyViirs: 'VIIRS pixel, 375 m',
  },

  stages: [
    { id: 'collect', n: 1, label: 'Collect' },
    { id: 'prepare', n: 2, label: 'Prepare' },
    { id: 'harmonize', n: 3, label: 'Harmonize', core: true },
    { id: 'analyze', n: 4, label: 'Analyze' },
    { id: 'present', n: 5, label: 'Present' },
  ],

  tools: [
    { k: 'Data Collection', v: 'NASA FIRMS API to retrieve MODIS and VIIRS satellite fire detections.' },
    { k: 'Data Processing', v: 'Pandas for cleaning, filtering, and aggregating fire records.' },
    { k: 'Geospatial Processing', v: 'GeoPandas for geographic grid mapping and spatial analysis.' },
    { k: 'Data Harmonization', v: 'SciPy for statistical calibration and anomaly detection.' },
    { k: 'Data Storage', v: 'DuckDB for storing and querying historical fire records.' },
    { k: 'Backend', v: 'FastAPI for data processing and communication with the frontend.' },
    { k: 'Frontend', v: 'React for developing the interactive web application.' },
    { k: 'Geospatial Visualization', v: 'MapLibre GL JS for interactive maps, geographic heatmaps, and fire activity layers.' },
    { k: 'Statistical Visualization', v: 'Apache ECharts for seasonal calendars, anomaly heatmaps, time-series charts, and sensor comparisons.' },
    { k: 'Deployment', v: 'Vercel for hosting the web application.' },
  ],

  roles: {
    research: 'Research & Design',
    collection: 'Data Collection',
    cleaning: 'Data Cleaning & Engineering',
    ml: 'Machine Learning',
    web: 'Website Development & Deployment',
  },
  teamLabel: 'Team',

  sections: [
    {
      id: 'idea',
      title: 'Idea and Goal',
      blocks: [
        { type: 'h3', text: 'The idea' },
        { type: 'p', html: 'Our idea is to turn two separate satellite fire records into one. MODIS and VIIRS cannot be compared directly, because VIIRS has finer pixels (375 m versus 1 km) and detects more and smaller fires. A record that switches between them shows a jump that looks like a change in fire activity but is not one. We use the years when both sensors were operating to calibrate them against each other, and present the harmonised record as a burning activity calendar for any area the user chooses.' },
        { type: 'h3', text: 'The goal' },
        { type: 'p', html: 'Our goal is to let land managers, early warning agencies, emergency responders and scientists trust what they see in two decades of fire data. We aim to:' },
        {
          type: 'ul',
          items: [
            'Remove the artificial step change at the sensor transition.',
            'Show the typical fire season for each area and week of the year.',
            'Highlight anomalous weeks and recurring critical periods.',
            'Make uncertainty visible, with data gaps and calibration confidence.',
          ],
        },
      ],
    },

    {
      id: 'problem',
      title: 'The Problem',
      blocks: [
        { type: 'p', html: 'Understanding how burning activity is distributed across our planet over time, including wildfires and agricultural burns intense enough to be detected by satellite sensors, helps us anticipate critical periods, guide monitoring efforts, and improve fire response. Satellites have tracked active fire hotspots for more than two decades, but this record is split across different sensors, most prominently MODIS and VIIRS, whose data cannot be compared directly.' },
        { type: 'h3', text: 'Documented examples of how the sensors’ readings differ' },
        { type: 'p', html: '<strong class="leadin">Spatial resolution.</strong> The thermal band of MODIS detects hotspots at 1,000 m per pixel, while VIIRS does so at 375 m. VIIRS is therefore about three times more detailed and picks up many small, low-temperature fires that MODIS misses (NASA Earth Observatory, n.d.). NASA’s FIRMS platform likewise warns users that the finer VIIRS resolution produces a stronger response over small fires and better nighttime performance, so many more fires are detected from VIIRS (NASA FIRMS, n.d.).' },
        { type: 'figure' },
        { type: 'p', html: '<strong class="leadin">Differences in detection counts.</strong> Comparing four months of data from 2013, Csiszar et al. (2014) found that the VIIRS 750 m product recorded about 26% more detections than MODIS within the central part of the scan and about 70% more outside it, mainly because of VIIRS’s superior scanning and sampling characteristics.' },
        { type: 'p', html: '<strong class="leadin">Even within VIIRS.</strong> Schroeder et al. (2014) showed that the 375 m VIIRS product increased the number of detected fire pixels by roughly 3× during the day and 25× at night compared with the 750 m VIIRS product. The LP DAAC user guide (n.d.) confirms this: the VNP14IMG product detected up to three times more fire pixels than VNP14, and about 45% of its daytime fire pixels had no match in VNP14. Product resolution alone changes the counts.' },
        { type: 'p', html: '<strong class="leadin">Fire radiative power (FRP).</strong> Li et al. (2018) reported that geometric differences between the two sensors can cause considerable discrepancies in fire detection and characterization across the scan swath, and that duplicate detections between adjacent scans inflate cumulative FRP in MODIS about twice as much as in VIIRS.' },
        { type: 'p', html: '<strong class="leadin">Changing algorithm versions.</strong> Even the MODIS record alone is not static. As Giglio et al. (2016) explain, MODIS products are periodically reprocessed to implement algorithm changes: Collection 5 production began in mid-2006, and Collection 6 reprocessing began in May 2015.' },
        { type: 'h3', text: 'Why this matters' },
        { type: 'p', html: 'If a land manager compares two years observed by different sensors or processed with different algorithm versions, a change caused by the sensor may be mistaken for a real change in fire activity. This makes it hard to identify unusual years and weeks, or to detect recurring critical periods, with confidence.' },
        { type: 'p', html: 'This is also an open research problem. Giglio et al. (2025), in their study of the NASA VIIRS burned area product, concluded that regional-scale statistical calibration of the VIIRS and MODIS burned area products is likely needed to obtain a single, consistent long-term fire record. Zheng et al. (2026) note that single-sensor records are limited by differences in observation geometry, spatial resolution, detection sensitivity, and swath coverage, and that several unresolved issues still hinder a long-term, internally consistent MODIS–VIIRS record.' },
        { type: 'p', html: 'The issue is also pressing. The Copernicus Atmosphere Monitoring Service (n.d.) reports that the MODIS instruments on Terra and Aqua are approaching retirement, and that on 4 December 2025 it began adding VIIRS active fire observations to its Global Fire Assimilation System. Continuity between the two sensors is now an operational need.' },
        { type: 'h3', text: 'Who is affected' },
        { type: 'p', html: 'Early warning agencies, emergency responders, land managers, and scientists studying historical fire patterns all lack a consistent picture of when and where burning has occurred over the past two decades.' },
        { type: 'h3', text: 'The question we address' },
        { type: 'callout', html: 'How can we harmonize MODIS and VIIRS records into a single consistent series and present it as a burning activity calendar for any area of interest chosen by the user, so that historical patterns, unusual conditions, and critical periods can be examined with confidence?' },
      ],
    },

    {
      id: 'solution',
      title: 'Proposed Solution',
      blocks: [
        { type: 'h3', text: 'Overview' },
        { type: 'p', html: 'A web app that produces a single burning activity calendar by combining the MODIS and VIIRS active fire records. The fire detections from both sensors are pulled from NASA FIRMS, cleaned and then aggregated by week and spatial grid cell. The overlapping years (where both sensors are operating) are used to calibrate the records against each other so as to eliminate the artificial step change that occurs when the record moves from one sensor to the other. On this harmonised record you can then look at typical fire seasons and identify any anomalous periods for any area of your choice.' },
        { type: 'h3', text: 'How we came up with the solution' },
        { type: 'p', html: 'When we first looked into the challenge, we noticed that the main problem was the difference between MODIS and VIIRS. Even though both satellites detect fire activity, they don\'t necessarily give the same results because of differences in their sensors. So we knew that simply putting the two datasets together wouldn\'t give us an accurate picture of fire activity over the years.' },
        { type: 'p', html: 'We started thinking about how we could approach this as engineering students. Our idea was to divide the problem into steps that we were familiar with: collecting data, cleaning and processing it, finding a way to deal with the differences between the sensors, and then using the results to build something useful.' },
        { type: 'p', html: 'After doing some research, we found that we could use the years when both satellites were operating to compare their readings and figure out how to make them more consistent. That gave us the foundation for our solution.' },
        { type: 'p', html: 'But we also wanted the final result to be more than just processed data. We wanted people to actually be able to understand and use it. That\'s where the idea of an interactive map and calendar came from, allowing users to explore fire activity over time, see seasonal patterns, and identify unusual or critical periods.' },
        { type: 'p', html: 'Our approach follows five stages:' },
        { type: 'stages' },
        { type: 'stage', id: 'collect', n: 1, text: 'Collect' },
        { type: 'p', html: 'We pull our active fire hotspots from NASA FIRMS which distributes the MODIS and VIIRS detections via its Area API and via archive downloads. The main record we use is the combination of Aqua MODIS and Suomi NPP VIIRS, the similar overpass times of the two sensors making cross sensor comparison much more robust (Zheng et al., 2026). The VIIRS record starts in January 2012 (LP DAAC, n.d.) and that is the period of overlap that we use for calibration. For the historical record we use the Standard Processing data as the near real time Aqua products have less precisely known satellite positions (NASA Applied Sciences, 2025).' },
        { type: 'stage', id: 'prepare', n: 2, text: 'Prepare' },
        { type: 'p', html: 'Raw detections are cleaned and sorted prior to any comparison. Days with no satellite data are simply flagged as \'data unavailable\' rather than \'no fire\' in accordance with the FIRMS official list of missing dates (Zheng et al., 2026). Duplicate detections (arising from overlapping scans, which is a more significant issue for MODIS than VIIRS (Li et al., 2018)) are dealt with using a simple rule. Detections are then aggregated by week and by spatial grid cell (e.g. 0.25°). The aggregation is by week on purpose as fires can vary quite considerably between the two satellite overpass times and there are very few near-simultaneous detections during a fire season (Li et al., 2018). It is therefore more robust to compare the aggregated statistics than the individual detections.' },
        { type: 'stage', id: 'harmonize', n: 3, text: 'Harmonize' },
        { type: 'p', html: 'VIIRS pixels are finer (375m vs 1km for MODIS) so they pick up more and smaller fires. The count will therefore go up when a record switches sensor even if there\'s no actual change in fire activity (Schroeder et al., 2014). The magnitude of the difference is region dependent. In Punjab, India VIIRS recorded around 4.8 times as many fire counts as MODIS (Vadrevu &amp; Lasko, 2018). In Northeast Asia MODIS was missing 65-83% of the VIIRS fire pixels in the forests and low biomass lands (Fu et al., 2020). For this reason a recent NASA study has suggested that regional calibration is probably required to get a consistent fire record (Giglio et al., 2025).' },
        { type: 'p', html: 'We therefore calibrate the two sensors region by region and season by season using their overlap period and express the VIIRS record in "MODIS equivalent" terms so that the longest record is the reference (an approach very similar to that of a recent fusion study (Zheng et al., 2026)). We begin with a simple ratio between the sensors and consider quantile mapping as a more sophisticated option (Kaur et al., 2019).' },
        { type: 'stage', id: 'analyze', n: 4, text: 'Analyze' },
        { type: 'p', html: 'On the harmonised series we calculate for each grid cell and each week of the year the typical level of fire activity from the historical record. Each week is then compared to that baseline to identify the weeks which are anomalous and weeks which are anomalous in a number of years are identified as critical periods. Where possible we summarise the activity in terms of the number of days with at least one detection (a less sensitive measure to sensor resolution than raw counts).' },
        { type: 'stage', id: 'present', n: 5, text: 'Present' },
        { type: 'p', html: 'The output is in a web app. You select an area of interest on the map and get a calendar view of the burning activity by year and week, with the usual season, the anomalous weeks and the critical periods. There\'s a toggle between the raw and the harmonised series to show the sensor transition effect and how it\'s removed. Data gaps and calibration confidence are all indicated so the user can see the level of uncertainty.' },
      ],
    },

    {
      id: 'tools',
      title: 'Proposed Tools and Technologies',
      blocks: [{ type: 'tools' }],
    },

    {
      id: 'team',
      title: 'Team and Tasks',
      blocks: [{ type: 'team' }],
    },

    {
      id: 'future',
      title: 'Benefits and Future Development',
      blocks: [
        { type: 'h3', text: 'Benefits' },
                { type: 'p', html: 'The harmonised calendar gives each group a consistent picture of when and where burning has occurred:' },
        {
          type: 'ul',
          items: [
            '<strong class="leadin">Land managers</strong> can compare fire seasons across the full record without mistaking a sensor change for a real change in fire activity.',
            '<strong class="leadin">Early warning agencies and emergency responders</strong> can see the typical fire season and the recurring critical periods for their area, and plan monitoring ahead of time.',
            '<strong class="leadin">Scientists</strong> get a single, consistent MODIS–VIIRS series for studying historical fire patterns, with data gaps and calibration confidence shown openly.',
            '<strong class="leadin">Long-term continuity:</strong> as MODIS approaches retirement, the harmonised record lets long-term fire analyses continue on VIIRS data.',
          ],
        },
        { type: 'h3', text: 'Future Development' },
        { type: 'p', html: 'We intend to add further VIIRS satellites (NOAA-20 and NOAA-21 which FIRMS also provides) to send alerts when a region enters a critical phase and to provide data export and an API for researchers and agencies, we could also add a forecasting prediction system to predict where the fires spread.' },
      ],
    },

    {
      id: 'validation',
      title: 'Validation and Limitations',
      blocks: [
        { type: 'h3', text: 'Validation' },
        { type: 'p', html: 'We\'ll calibrate on part of the overlap period and test on the subsequent, unseen years. We\'ll compare the raw and harmonised series to check that the step change at the sensor transition has been reduced. We\'ll also cross-check against independent references such as the burned area products (Giglio et al. 2025).' },
        { type: 'h3', text: 'Limitations' },
        {
          type: 'ul',
          items: [
            'Harmonising to the MODIS equivalent terms maintains continuity but doesn\'t recover the small fires that MODIS was unable to detect.',
            'Calibration is based on the Aqua-Suomi NPP pair and does not transfer directly to Terra (Zheng et al., 2026).',
            'Agricultural areas have the highest false detection rates of any land cover type (Zheng et al. 2026).',
            'The assumption that the sensor relationship post 2012 also holds for the earlier years cannot be tested directly and we will state it explicitly to the users.',
          ],
        },
      ],
    },

    {
      id: 'references',
      title: 'References',
      blocks: [{ type: 'refs' }],
    },
  ],

  footer: 'NASA Space Apps Challenge 2026 · Harmonization of MODIS and VIIRS Hot Spots',
}

export default en
