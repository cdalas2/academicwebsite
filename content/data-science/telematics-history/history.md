---
widget: blank
title: ''
summary: ''
date: "2026-02-13T00:00:00Z"

reading_time: true
share: true
profile: false
comments: false

design:
  columns: '1'

weight: 10

---
<center>
{{< typography font="Roboto Serif" size="30px" weight="bold">}}
  Data Science
{{< /typography >}}
</center>
<br>
<center>
{{< typography font="Roboto Serif" size="26px">}}
  Telematics
{{< /typography >}}
</center>
<br>

{{< typography font="Roboto Serif:wght@100" size="0px">}}
{{< /typography >}}
{{< typography font="Roboto Serif" size="18px">}}
<a href="/data-science/telematics/">&larr; Back to Telematics</a>
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="24px" weight="bold">}}
Thirty Years Behind the Wheel: How Telematics Grew from a Cadillac Gimmick into the Force Reshaping Auto Insurance
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="18px" weight="100" style="italic">}}
February 2026 &nbsp;·&nbsp; Long Read
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="23px" weight="100">}}
In September 1996, a Cadillac rolled off a dealer lot in suburban Detroit carrying something no production car had ever contained: a small panel embedded in the rearview mirror with three colored buttons — white, blue, and red — that connected the vehicle, via satellite and cell tower, to a room full of operators in a call center hundreds of miles away. Press the blue button and a human voice would give you directions. Press the red button and the car itself would cry for help. General Motors called it OnStar. The company had spent two years and 55 failed prototypes getting it to work.<sup>1</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
In one early version, the system mistook static electricity on a person's hand for an airbag deployment and called 911. In another, a remote door-unlock command triggered the horn and flashing lights instead. Others simply drained the battery overnight.<sup>1</sup> The engineers kept going because the people at the top of General Motors — including Rick Wagoner, then president of North American Operations — believed that a co-pilot-like capability would change how people thought about GM cars.<sup>1</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
They were right, though not in the way anyone imagined. OnStar didn't just change car buying. It created an entire industry — telematics — and set in motion a chain of events that is now reshaping one of the most consequential financial relationships in American life: the one between drivers and their insurance companies. For the first time in the century-long history of auto insurance, the technology exists to price policies based on how someone actually drives rather than who they happen to be. The 22-year-old with a clean record no longer has to subsidize the 45-year-old who tailgates on the freeway. The rural commuter who logs 3,000 careful miles a year no longer has to carry the actuarial weight of the urban lead-foot logging 30,000. Telematics makes that possible. But getting here required an improbable sequence of Cold War technology, environmental regulation, corporate ambition, and a still-unfolding reckoning over privacy that may ultimately determine whether the promise is fulfilled.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="26px">}}
ACT I: THE SATELLITES
{{< /typography >}}
{{< typography font="Roboto Serif" size="24px" weight="100" style="italic">}}
A Weapon Becomes a Utility
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
On October 4, 1957, when Sputnik beeped its way across the night sky, two physicists at the Johns Hopkins Applied Physics Laboratory noticed they could track the Soviet satellite by measuring the Doppler shift of its radio signal. Then they had the insight that would, decades later, put a blue dot on your phone: if you could pinpoint a satellite's position by listening from the ground, you could also pinpoint a ground position by listening to the satellite.<sup>2</sup> The conceptual architecture of GPS was born from a Cold War parlor trick.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Throughout the 1960s, the Navy ran with the idea, building the Transit satellite navigation system to track submarine-launched ballistic missiles. The Naval Research Laboratory pursued the Timation program, proving that atomic clocks could function in orbit. The Air Force had its own project, 621B.<sup>3</sup> All three were effective but incompatible. Then, on a Labor Day weekend in 1973, about a dozen military officers gathered at the Pentagon and decided to merge the best of everything into a single system. The program was called NAVSTAR, and the Defense Department approved it in December 1973.<sup>4</sup> The first satellite launched in February 1978.<sup>5</sup> The full constellation of 24 satellites reached operational status in 1993.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
GPS was built for precision-guided weapons and nuclear submarine navigation. Civilians were not part of the plan. That changed on September 1, 1983, when Korean Air Lines Flight 007 drifted into Soviet airspace due to a navigational error and was shot down, killing 269 people. In the aftermath, President Reagan announced that GPS would be made available for civilian use.<sup>2</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
But the Pentagon hedged. The military implemented "Selective Availability," intentionally degrading civilian GPS signals to about 100 meters of accuracy — good enough to find a shopping mall, not good enough to guide a cruise missile. The civilian world lived under this artificial fog for nearly two decades, until May 1, 2000, when President Clinton switched it off.<sup>2</sup> Overnight, the accuracy available to anyone with a $200 receiver improved tenfold. President George W. Bush later made the change permanent, confirming that future GPS satellites would not even include the capability to degrade civilian signals.<sup>2</sup> The military's most important navigational tool was now, irrevocably, the world's.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="26px">}}
ACT II: THE PORT
{{< /typography >}}
{{< typography font="Roboto Serif" size="24px" weight="100" style="italic">}}
Smog Laws Build a Backdoor
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
While satellites were making it possible to know where a car was, a completely separate political battle was making it possible to know what a car was doing. And it had nothing to do with navigation. It was about smog.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The Clean Air Act of 1970 required a 90% reduction in tailpipe emissions, and by the 1980s, cars were increasingly computer-controlled.<sup>6</sup> The California Air Resources Board — CARB, the perennially aggressive regulator — saw an opportunity. If cars now had onboard computers managing their engines, those computers could also monitor emissions compliance. In 1991, CARB mandated that all vehicles have an on-board diagnostic system. The first version, OBD-I, was a step, but every manufacturer's implementation was different.<sup>7</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The real breakthrough came in 1994, when CARB issued the OBD-II standard: a uniform set of diagnostic protocols with a standardized 16-pin connector, mandatory on every vehicle sold in the United States beginning with the 1996 model year.<sup>7</sup> The Society of Automotive Engineers and the International Organization for Standardization codified the digital communication protocols.<sup>7</sup> The EPA expanded its use after the Clean Air Act amendments, and by 2001, 33 states required OBD-II-based vehicle inspections.<sup>7</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Here's what the regulators didn't anticipate: the OBD-II port was essentially a USB port for your car, standardized and universal, available on every vehicle manufactured after 1996. It could read engine speed, vehicle speed, fuel consumption, and dozens of other parameters. It also provided electrical power. This meant that anyone could build a small device, plug it into the port below the dashboard, and tap into the car's entire electronic nervous system — no professional installation required. The port that was designed to check your catalytic converter would become the hardware foundation for a revolution in how auto insurance is priced.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="26px">}}
ACT III: THE MACHINES
{{< /typography >}}
{{< typography font="Roboto Serif" size="24px" weight="100" style="italic">}}
General Motors Creates an Industry
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The convergence happened in a conference room in 1995. Harry Pearce, GM's vice chairman, who had organizational responsibility for both Hughes Electronics and Electronic Data Systems, began noticing a set of maturing technologies that looked promising for a company in the transportation business: GPS, voice recognition, sophisticated in-vehicle electrical systems, and — crucially — a nationwide cellular infrastructure that was finally ubiquitous enough to rely on.<sup>46</sup> He brought together Hughes (satellites and automotive electronics), EDS (systems development, information management, and the round-the-clock call centers where human advisors would answer when a driver pressed the button), and GM's own vehicle engineering team, with cellular network access provided by what would become Verizon Wireless in the U.S. and Bell Mobility in Canada.<sup>11</sup> The fundamental question: What happens when you put GPS, cellular communication, and vehicle diagnostics inside a car and connect them to a human being?<sup>1</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The answer was OnStar, and when it debuted at the 1996 Chicago Auto Show, it was unlike anything in the automotive world.<sup>8</sup> The system used a 3-watt cellular phone (five times the power of a typical handheld), a GPS antenna, and a connection to the vehicle's CAN bus to deliver a suite of services: emergency response, remote diagnostics, stolen vehicle tracking, and turn-by-turn navigation via a live human advisor.<sup>9</sup> By the end of 1997, there were only 1,100 subscribers. By 2002, there were more than two million. By 2011, six million.<sup>10,11</sup>
{{< /typography >}}
<br>
<blockquote>
{{< typography font="Roboto Serif" size="21px" weight="100" style="italic">}}
"I don't consider General Motors competition. We're big fans of General Motors. They frankly created this industry and created awareness." — Erik Goldman, president of Hughes Telematics
{{< /typography >}}
</blockquote>
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Sensing the platform's potential, GM initially licensed OnStar to other automakers. Through the early 2000s, Acura, Audi, Isuzu, Lexus, and Volkswagen all offered OnStar-equipped vehicles.<sup>12</sup> For GM, this was a goldmine: subscription revenue from competitors' customers, a cross-brand dataset of driving behavior, and a recurring replacement hardware cycle. But the arrangement contained the seeds of its own disruption. Why, the other manufacturers began asking, should a GM subsidiary collect our customers' data and take their subscription payments?
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
In 2005, GM made OnStar exclusive to its own vehicles.<sup>12</sup> The OEM exodus accelerated. Toyota and Honda, which had previously licensed OnStar technology, dropped it and built their own systems — Toyota's G-Book (for Japan) evolved into Safety Connect for the U.S. market in 2009; Honda built Internavi.<sup>13,14</sup> BMW had introduced BMW Assist in 1997, Mercedes-Benz launched TeleAid in 1999, and Ford developed SYNC.<sup>13</sup> The logic was the same everywhere: telematics generated recurring subscription revenue, created a post-sale digital relationship with customers, and — crucially — produced a growing mountain of data about how vehicles were actually used. No manufacturer wanted a rival controlling that relationship.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Today, Motorq estimates that 96% of vehicles manufactured in the U.S. ship with embedded telematics hardware.<sup>15</sup> Every major automaker operates a proprietary connected-car platform. But each uses its own data structures, signal names, and APIs — a mixed fleet of Ford, GM, and Stellantis trucks can require three completely separate integrations. The industry that OnStar created is enormous. It is also, three decades later, spectacularly fragmented.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="26px">}}
ACT IV: THE ACTUARIES
{{< /typography >}}
{{< typography font="Roboto Serif" size="24px" weight="100" style="italic">}}
The End of Guessing
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Here is the fundamental unfairness that telematics was born to solve: for most of the 20th century, auto insurance was priced on proxies. Your age, your ZIP code, your credit score, your gender, your marital status, your claims history. These variables correlate with risk in the aggregate, but they say almost nothing about you. A 19-year-old who drives cautiously on rural highways pays a punishing premium because other 19-year-olds, statistically, do not. A 50-year-old who tailgates and texts behind the wheel gets a discount because his demographic cohort, on average, files fewer claims. The system was never designed to be fair to individuals. It was designed to be profitable for pools.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
What insurers really wanted was to watch you drive. Telematics gave them that ability — and for the first time, it gave drivers a way to prove they deserved a better rate.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The pioneer was Progressive Insurance. In 1996 — the same year OnStar debuted — Progressive launched a product called "Autograph," its first attempt at usage-based insurance.<sup>16</sup> The technology was hilariously primitive: a gray box the size of a video projector that required professional installation. It recorded driving data to a local storage device that customers had to physically mail back. The idea for the program came from Progressive's IT department, where engineers who'd previously worked in commercial trucking realized that the same fleet-telematics techniques they'd used to monitor semis could, in theory, be applied to personal auto insurance.<sup>17</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The technology wasn't ready. Cell networks were optimized for voice, not data. Devices were expensive. But Progressive kept iterating. "TripSense" arrived in 2004 as the first self-installable version. "MyRate" in 2008 added cellular data upload. And in 2010, Progressive launched "Snapshot" — the plug-in OBD-II device that became the modern usage-based insurance template.<sup>16</sup> A mobile app followed in 2016. Continuous monitoring began rolling out in 2022. By then, Progressive had collected more than 14 billion miles of driving data.<sup>18</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The results are striking. According to survey data, 66% of drivers who use telematics programs see their premium decrease, while only 11% experience an increase.<sup>35</sup> That's not a rounding error — it's evidence that the majority of drivers are safer than their demographic proxies suggest, and that telematics gives them the tool to prove it.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="24px">}}
Two Philosophies, Two Markets
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
As other insurers followed Progressive's lead, the industry split into two distinct camps, each targeting a different customer segment and collecting fundamentally different data.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The first camp focused on usage — how much you drive. The insight was actuarially simple: more time on the road means more exposure to risk. If you work from home and drive 3,000 miles a year, you shouldn't pay the same premium as a delivery driver logging 30,000. Companies targeting this segment built Pay-As-You-Drive products centered on mileage tracking. Metromile, founded in San Francisco in 2011, became the poster child, charging a monthly base rate plus a per-mile fee tracked via a device plugged into the OBD-II port.<sup>19</sup> Allstate's Milewise (launched in 2016) adopted the same model.<sup>20</sup> These programs did not care whether you braked hard or took turns aggressively — they only cared whether you were on the road at all.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The second camp focused on behavior — how safely you drive. These Pay-How-You-Drive programs targeted the broader driving population and tracked hard braking, rapid acceleration, speeding, cornering, phone usage, and time of day. Progressive's Snapshot was the archetype.<sup>21</sup> Allstate's Drivewise (2010), Nationwide's SmartRide (2009), State Farm's Drive Safe &amp; Save, GEICO's DriveEasy (2019), and Travelers' IntelliDrive (2017) all joined the behavior-tracking paradigm.<sup>20</sup> Root Insurance, founded in Columbus, Ohio in 2016, went further still, pricing policies primarily on smartphone telematics data rather than traditional rating factors.<sup>22</sup>
{{< /typography >}}
<br>
<blockquote>
{{< typography font="Roboto Serif" size="21px" weight="100" style="italic">}}
"It's one of the few parts of insurance pricing that's truly in the customer's hands. They decide when and how to participate, and they can take real, measurable steps to improve their rate with actionable feedback. And because the incentives are aligned with safer driving, it helps make the roads safer for everyone." — Ryan McMahon, SVP of Strategy, Cambridge Mobile Telematics<sup>37</sup>
{{< /typography >}}
</blockquote>
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
That last point matters. Telematics doesn't just re-sort the existing risk pool — it can shrink it. When drivers know their braking, acceleration, and phone usage are being measured, they modify their behavior. The feedback loop is direct and immediate in a way that a semiannual premium statement never was.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="24px">}}
Meanwhile, in the Journals
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The scientific community arrived at a strikingly parallel taxonomy. Researchers reviewing the usage-based insurance literature divided telematics metrics into two broad categories that mirror the industry's split but extend it with greater nuance.<sup>23</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The first category — which researchers label <em>usage, exposure, and driving environment</em> — encompasses the strategic context of driving: which roads a driver selects, what time of day they travel, how much they drive, traffic density, and environmental conditions. These go beyond simple mileage to capture the full ecological context of risk exposure.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The second category — <em>driving skill and driving behavior</em> — captures the kinematic signature of how a driver operates the vehicle: acceleration profiles, braking intensity, cornering forces, speed maintenance, and jerk (the rate of change of acceleration). Systematic reviews have confirmed that speed, acceleration, and braking are the most predictive variables for assessing driving behavior.<sup>24</sup> Large-scale fleet studies have shown that hard braking and hard acceleration hotspots correlate meaningfully with collision rates, though the relationship varies by road type.<sup>25</sup> More recent clustering research has identified distinct driver profiles — "Low-Exposure Cautious," "Balanced/Average," and "High-Risk" — based on the interaction of both exposure and behavior metrics.<sup>26</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The industry and the academy, working from different incentives and different datasets, converged on the same fundamental insight: driving risk has two dimensions, and measuring only one of them gives you an incomplete picture. More importantly, both dimensions are things a driver can control. Unlike your ZIP code or your age, you can choose to drive fewer miles. You can choose to brake less aggressively. Telematics turns insurance pricing from a demographic lottery into a meritocracy — and the data increasingly confirms that the math works.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="26px">}}
ACT V: THE SHAKEOUT
{{< /typography >}}
{{< typography font="Roboto Serif" size="24px" weight="100" style="italic">}}
Growing Pains
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Around 2015, the game changed again. Smartphones got good enough — their accelerometers precise enough, their GPS radios reliable enough — that a mobile app could replace a hardware dongle. Suddenly the barrier to entry for telematics collapsed. You no longer needed to manufacture OBD-II devices, manage a supply chain, or mail hardware to customers. Any company with an app and some signal-processing algorithms could, in theory, collect driving data.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Cambridge Mobile Telematics (CMT), spun out of MIT research in 2010, became the dominant third-party platform provider, powering programs for more than 50 insurers worldwide through its DriveWell platform.<sup>27</sup> Arity, created as an Allstate subsidiary, pursued a vertically integrated strategy, building a telematics analytics engine with access to more than 35 billion miles of Allstate driving data while also licensing its technology to companies outside insurance.<sup>28</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
But the rapid expansion brought growing pains. Insurance required state-by-state regulatory approval — and insurance is regulated in all 50 states independently, each with its own rules about permissible rating factors, data privacy, and consumer disclosure. California, the nation's largest auto insurance market, banned telematics-based pricing entirely.<sup>29</sup> North Carolina and New York allowed telematics but prohibited surcharges — discounts only.<sup>29</sup> Every state was a separate regulatory negotiation.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Meanwhile, the venture-backed insurtech startups that had rushed into the space were burning cash at extraordinary rates. Root Insurance, which IPO'd in October 2020 at a valuation of roughly $6.7 billion, saw its share price crater from $27 to $2. It laid off 330 employees.<sup>22</sup> Metromile, despite pioneering pay-per-mile insurance, found that its addressable market — people who drive very little and are price-sensitive enough to want per-mile billing — was uncomfortably narrow. In November 2021, Lemonade acquired Metromile for approximately $500 million and promptly laid off a fifth of the staff.<sup>19</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Then came March 10, 2023. Silicon Valley Bank, the 16th-largest bank in the United States and the financial backbone of the tech startup ecosystem, collapsed in a two-day bank run that drained $42 billion in deposits.<sup>30</sup> It was the second-largest bank failure in American history.<sup>31</sup> Several smaller telematics and insurtech startups that depended on venture capital failed to secure the next round and quietly shut down.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The lesson was clear: the startups that tried to blitzscale their way into insurance mostly failed, but the technology itself was validated. Telematics works. The companies that survived — the ones with the actuarial patience to build books of business over decades rather than fiscal quarters — now form the industry's backbone.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Among platform providers, Cambridge Mobile Telematics is the global leader, with partnerships spanning Progressive, Farmers, American Family, Travelers, and dozens of international insurers.<sup>20</sup> Arity (Allstate) controls the second-largest dataset and has the advantage of vertical integration.<sup>28</sup> LexisNexis (through its Telematics Exchange) and Verisk aggregate data from multiple sources into standardized risk scores, acting as the data plumbing between automakers, telematics providers, and insurers.<sup>32</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Among insurers, Progressive remains the market leader, with Snapshot available in 49 states.<sup>20</sup> State Farm has the most versatile data-ingestion strategy, accepting telematics from OnStar, FordPass, and its own mobile app. Allstate covers both market segments with Drivewise (behavior) and Milewise (mileage). Nationwide, Travelers, GEICO, USAA, Liberty Mutual, and American Family all maintain active programs.<sup>20</sup>
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="26px">}}
ACT VI: THE DATA DIVIDE
{{< /typography >}}
{{< typography font="Roboto Serif" size="24px" weight="100" style="italic">}}
Your Phone Isn't as Smart as Your Car
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
There is one persistent challenge at the heart of mobile telematics: your smartphone is a mediocre driving sensor.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
OEM-embedded telematics — the systems built into vehicles by manufacturers — captures data directly from the vehicle's CAN bus through factory-calibrated, rigidly mounted sensors. Speed comes from the vehicle's own speedometer. Acceleration and braking come from calibrated accelerometers integrated with the ABS system. Mileage comes straight from the odometer. Newer vehicles add ADAS data: lane departure events, forward-collision warnings, camera feeds.<sup>33</sup> This data is precise, consistent, and trustworthy across millions of trips.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Smartphone-based telematics, by contrast, relies on consumer-grade accelerometers and GPS receivers inside a device that may be sitting on the passenger seat, rattling around in a cupholder, or buried in a jacket pocket. During a collision, the phone is not rigidly coupled to the vehicle frame, so accelerometer data may be unreliable. Data-fusion algorithms can improve quality and filter out low-confidence readings,<sup>34</sup> but the fundamental physics problem remains: a loosely mounted sensor cannot match a fixed one. A J.D. Power study found that only 38% of telematics program enrollees believed their data was always accurately collected. App reviews frequently complain about phantom hard-braking events.<sup>35</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
There's also the identity problem. A smartphone tracks a person, not a vehicle. If your teenager borrows the car and your phone stays in your pocket, the telematics app either records no trip or misattributes the teenager's driving to the parent.<sup>34</sup> OEM telematics is always present in the vehicle regardless of who's driving — though it has its own challenge of identifying which driver is behind the wheel.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The industry is converging toward a hybrid model. Platforms like LexisNexis's Telematics Exchange normalize data from multiple OEMs and mobile providers, and insurers like State Farm already accept data from connected vehicles, OBD-II devices, and phone apps interchangeably.<sup>32</sup> As connected-vehicle penetration approaches saturation, the strategic direction is clear: use the higher-quality OEM data wherever it's available, supplement with mobile telematics for older vehicles, and invest in data-fusion techniques that can triangulate between imperfect sources. Better data means fairer pricing — and fairer pricing is, ultimately, what this entire industry exists to deliver.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="26px">}}
ACT VII: THE RECKONING
{{< /typography >}}
{{< typography font="Roboto Serif" size="24px" weight="100" style="italic">}}
Trust Is the Product Now
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
If telematics has the power to democratize insurance pricing, it also has the power to erode trust — and in 2024, several companies demonstrated exactly how.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The catalyst was a <em>New York Times</em> investigation in April 2024 revealing that General Motors' OnStar Smart Driver program had been sharing detailed driving data — speed, braking, acceleration, seatbelt use, collected as frequently as every three seconds — with data brokers LexisNexis and Verisk.<sup>36</sup> Those brokers compiled the data into driving scores and sold them to insurance companies, which used them to deny coverage, increase premiums, or cancel policies. Many drivers had no idea they had been enrolled. GM's onboarding process involved 29-page user terms, an 18-page privacy statement, and links to additional partner terms.<sup>38</sup> One driver, whose insurance application was rejected based on a LexisNexis report he had never heard of, discovered it chronicled 258 of his trips over six months, including specific instances of speeding and abrupt braking.<sup>39</sup> He filed a class-action lawsuit.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The dam broke. In June 2024, Texas Attorney General Ken Paxton launched investigations into GM, Ford, Hyundai, Toyota, and Fiat Chrysler over data collection and sharing practices.<sup>40</sup> In August 2024, Paxton sued GM under the Texas Data Privacy and Security Act, alleging the company used misleading enrollment techniques to collect and sell driving data without informed consent.<sup>40</sup> In January 2025, Paxton sued Allstate and its subsidiary Arity, alleging they had conspired to collect and sell telematics data from over 45 million Americans by embedding tracking software in popular mobile apps like Life360 and GasBuddy — without adequate disclosure to consumers.<sup>41</sup> Arkansas Attorney General Tim Griffin filed his own lawsuit against GM in February 2025, alleging deceptive trade practices.<sup>42</sup> In April 2025, a class-action was filed in Texas against Toyota, Progressive, and data broker Connected Analytics Services, alleging violations of federal wiretapping laws.<sup>40</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
At the federal level, Senator Edward Markey urged the FTC to investigate automakers' privacy practices. The FTC responded. In January 2025, the Commission announced action against GM and OnStar, alleging they had violated consumer privacy by collecting and selling geolocation and driver behavior data without affirmative consent.<sup>43</sup> In January 2026, the FTC finalized a consent order imposing a five-year ban on GM sharing geolocation and driving behavior data with consumer reporting agencies, requiring explicit consent before collecting connected vehicle data, and mandating consumer access, deletion rights, and opt-out mechanisms — effective for 20 years.<sup>44</sup> The order also included a data minimization requirement: GM must refrain from collecting more data than is reasonably necessary.<sup>44</sup> Honda, separately, was fined $632,500 by California's Privacy Protection Agency for violating the CCPA.<sup>40</sup>
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
GM discontinued the Smart Driver program in April 2024, unenrolled all participants, and severed its third-party telematics relationships with LexisNexis and Verisk.<sup>44</sup>
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="24px">}}
The Line Between Empowerment and Exploitation
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
Here is the critical distinction that the lawsuits exposed: there is a world of difference between a driver choosing to share data in exchange for a better rate, and a driver having their data harvested, scored, and sold without their knowledge or meaningful consent.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The first model — voluntary, transparent, opt-in telematics — is the one that democratizes insurance. A 90% majority of surveyed drivers agree that it is fair to price insurance based on driving skill and safety, so long as they understand the terms.<sup>35</sup> Programs like Travelers' IntelliDrive, and similar offerings from other major carriers, are built on this model. The driver enrolls. The driver sees what's measured. The driver gets actionable feedback. And for the two-thirds of participants whose premiums decrease, the tradeoff is clear and welcome.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The second model — covert collection, opaque data flows, and downstream monetization through brokers — is what the lawsuits targeted. It is also what threatens to undermine public trust in the entire telematics enterprise. When drivers discover that their car has been scoring their braking habits and selling the results to insurance companies they've never heard of, the backlash is predictable and justified. Only 12% of drivers currently use telematics programs, and among non-enrollees, the most commonly cited reason is concern about data privacy.<sup>35</sup> Every scandal that conflates voluntary telematics with covert surveillance makes it harder to persuade the remaining 88% to participate.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
This matters because the cross-subsidy problem doesn't go away when drivers opt out. Without telematics data, insurers fall back on demographic proxies — the same blunt instruments that overcharge safe drivers and undercharge risky ones. Every safe driver who declines a telematics program because they don't trust the industry is a driver who continues to subsidize someone else's risk. The irony is acute: the companies whose data practices eroded trust are making it harder for the industry to deliver the fairer pricing that telematics was designed to enable.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="24px">}}
Two Possible Futures
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The privacy reckoning now unfolding in courtrooms, state legislatures, and federal agencies is not a threat to telematics — it is, if the industry responds correctly, the thing that saves it.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
In the first future, companies get the message. They embrace data minimization: collecting only what is necessary to price a policy, disclosing exactly what is collected and how it is used, and committing — contractually, not just rhetorically — to never selling driving data to third parties or repurposing it for advertising, location tracking, or any use beyond the insurance relationship the driver consented to. Consent is real: clear language, single-screen opt-in, no dark patterns, no 29-page terms of service designed to manufacture compliance without comprehension. Drivers can see their data, understand their score, and delete their information at will. In this world, telematics adoption accelerates because drivers trust the system. More data flows in. Actuarial models improve. Premiums become more precisely calibrated to actual risk. Safe drivers save money. Dangerous drivers pay their fair share. The cross-subsidy shrinks. The roads get safer because the financial incentives and the safety incentives finally point the same direction.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
In the second future, the industry fights the lawsuits, lobbies against privacy legislation, and continues to treat consent as a legal checkbox rather than a genuine ethical commitment. Drivers remain suspicious. Adoption stalls. Insurers continue relying on demographic proxies, and the vast majority of safe drivers never get the rate reduction their driving record deserves. The technology works, but the trust deficit prevents it from reaching scale.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The emerging regulatory framework — the FTC's consent order against GM, the Texas and Arkansas lawsuits, California's CCPA enforcement, proposed federal legislation like the American Privacy Rights Act, and state-level telematics bills in New York, Tennessee, New Jersey, and California<sup>45</sup> — is pushing the industry firmly toward the first future. The companies that will thrive are the ones that treat data privacy not as a compliance burden but as a competitive advantage: the insurer who can say "we collect only what we need, we tell you exactly what it is, we never sell it, and you can delete it anytime" will win the trust of the 88% of drivers who haven't enrolled yet.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="26px">}}
EPILOGUE
{{< /typography >}}
{{< typography font="Roboto Serif" size="24px" weight="100" style="italic">}}
The Promise
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The trajectory from Sputnik's radio signal to a fairer insurance premium is, when you lay it out, astonishingly circuitous. It required Cold War paranoia, an airliner tragedy, California's obsession with smog, a Cadillac engineer's 55th attempt at a working prototype, the OBD-II port that Congress mandated for tailpipe testing, a Progressive Insurance IT manager who'd once tracked trucks for a living, and a decade of venture capital that was mostly lit on fire.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
But the underlying idea is simple and, at its core, deeply fair: if you drive safely, you should pay less. For a century, the insurance industry lacked the data to make that promise real. Now it has the technology. The question is no longer whether telematics can measure driving risk with precision — the science is settled on that. The question is whether the industry can build a system that drivers trust enough to participate in voluntarily, with full knowledge of what is collected, why it is collected, and an iron-clad guarantee that the data will never be used against them in ways they didn't agree to.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
The lawsuits of 2024 and 2025 were painful, but they may prove to be the best thing that ever happened to telematics. They drew a bright line between empowerment and exploitation. They forced regulators to demand data minimization, transparency, and genuine consent. And they gave the industry a roadmap: respect the driver, earn their trust, use only what you need, and protect everything you collect. Do that, and telematics fulfills its original promise — not as a surveillance tool, but as the mechanism that finally lets your driving speak for itself.
{{< /typography >}}
<br>

{{< typography font="Roboto Serif" size="18px">}}
<a href="/data-science/telematics/">&larr; Back to Telematics</a>
{{< /typography >}}
