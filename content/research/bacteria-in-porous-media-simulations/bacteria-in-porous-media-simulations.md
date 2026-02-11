---
widget: blank
title: ''
summary: ''
date: "2021-09-23T00:00:00Z"

reading_time: true  # Show estimated reading time?
share: true # Show social sharing links?
profile: false  # Show author profile?
comments: false  # Show comments?

design:
  columns: '1'

weight: 10

---
<center>
{{< typography font="Roboto Serif" size="30px" weight="bold">}}
  Research
{{< /typography >}}
</center>
<br>
<center>
{{< typography font="Roboto Serif" size="26px">}}
  Bacteria in porous media: Kinetic Monte Carlo model
{{< /typography >}}
</center>

<!-- Main figure showing bacteria hopping and trapping in porous media -->
<img src="7AECACC3-A78A-4470-992B-2C78B9D32C70.png" alt="Bacteria hopping and trapping in porous media">

{{< typography font="Roboto Serif:wght@100" size="0px">}}
{{< /typography >}}
> {{< typography font="Roboto Serif" size="18px" weight="100">}}
    We compare our simulated diffusivities, averaged over 100,000 10-minute simulations of bacteria hopping and trapping in porous media, to experimentally measured diffusivities [Bhattacharjee & Datta, 2019].
  {{< /typography >}}

<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  In homogeneous environments, flagellated bacteria swim using a two-state motion called "run-and-tumble." The bacterium runs in a straight direction for several body lengths by bundling and rotating its flagella, then tumbles by unraveling the bundle, causing it to slow down and reorient in a new random direction. This allows bacteria to sample their environment and construct gradients of food sources or specific chemicals. In this motion, the run time is typically much longer than the tumble time, so diffusion can be estimated from the average run length and run time.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  However, in porous media, flagellated bacteria employ a different two-state motion called "hopping-and-trapping" [Bhattacharjee & Datta, 2019]. The bacterium swims or "hops" in a straight direction until it becomes stuck or "trapped" due to confinement by neighboring pores. While trapped, the bacterium reorients and moves off in an almost random direction, with a slightly higher probability of returning in the direction it came from (though we assume uniform reorientation for simplicity). Bacteria spend significantly more time trapped than hopping. Therefore, estimation of their diffusivity through porous media can be obtained from the average hop length ⟨ℓ⟩ and trapped time ⟨τ⟩, rather than the hop time as in homogeneous "run-and-tumble" motion.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  The motion of flagellated bacteria through porous media was observed and measured in porous distributions with characteristic pore sizes of (a) 3.6 µm, (b) 2.5 µm, and (c) 1.9 µm [Bhattacharjee & Datta, 2019]. It was observed that smaller pore sizes increased the effects of pore confinement - in smaller pore size distributions, bacteria experience more trapping and less hopping. The experimenters measured the velocity distributions of bacteria and set the threshold between hopping and trapping states at half the measured run velocity in a homogeneous domain (14 µm/s). They found that varying this threshold between 8 and 20 µm/s had little effect on their results.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  The group measured distributions of hopping lengths and reported mean values ⟨ℓ⟩ of (a) 3.24 µm, (b) 2.79 µm, and (c) 2.14 µm, as well as distributions of trapped times. They also reported measured diffusivities of (a) 2.0 ± 0.25 µm²/s, (b) 1.0 ± 0.25 µm²/s, and (c) 0.5 ± 0.25 µm²/s. They compared their measurements to a simple random walk model where the diffusivity D<sub>RW</sub> is given by:
{{< /typography >}}
<br>
<center>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  D<sub>RW</sub> = ⟨ℓ⟩² / (3⟨τ⟩)
{{< /typography >}}
</center>
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  From their predicted diffusivities of (a) 7 µm²/s, (b) 3 µm²/s, and (c) 2 µm²/s, and the relation above, we can estimate the mean trapped times ⟨τ⟩ as approximately (a) 0.5 s, (b) 0.86 s, and (c) 0.76 s.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="26px">}}
  Subvolume Kinetic Monte Carlo Method
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  We developed a subvolume kinetic Monte Carlo (KMC) method that samples distributed hop lengths and trapped times from Poisson distributions. This method is an adaptation of the standard subvolume KMC approach, allowing for sampling of hop length ℓ distributions. Similar to conventional subvolume KMC, we sample the time spent in a lattice cell before hopping to another state (the trapped time τ), then sample a reorientation direction and hop length.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  We applied this method to study bacterial diffusion in porous media. To simulate diffusivity, we tracked a single bacterium in our 3D lattice domain. At each iteration, the bacterium occupies a trapped state while reorienting to hop to another trapped state. We ignore hop times and only consider trapped times, as hop times are negligible compared to trapped times. At each iteration, we sample a trapped time from a Poisson distribution with mean set to half the average trapped time ⟨τ⟩/2 (we found this choice significantly improved our diffusivity predictions). We then sample a reorientation direction from a uniform distribution and sample a hop length from a Poisson distribution fitted to the mean hop length ⟨ℓ⟩.
{{< /typography >}}
<br>

<!-- PLACEHOLDER FOR DIFFUSIVITY VS ITERATIONS FIGURE -->
<img src="diffusivity_iterations.png" alt="Average simulated diffusivity as a function of KMC iterations">

{{< typography font="Roboto Serif:wght@100" size="0px">}}
{{< /typography >}}
> {{< typography font="Roboto Serif" size="18px" weight="100">}}
    Average simulated diffusivity as a function of KMC iterations for different pore size distributions. Due to increased pore confinement effects, bacteria diffuse more slowly in media with smaller pore sizes.
  {{< /typography >}}

<br>
{{< typography font="Roboto Serif" size="26px">}}
  Results
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  We simulated the diffusion of a single bacterium in porous media with pore distributions of sizes (a) 3.6 µm, (b) 2.5 µm, and (c) 1.9 µm for 10 minutes per KMC iteration. Our results, averaged over 10⁵ iterations, yielded diffusivities of (a) 2.3 µm²/s, (b) 1.0 µm²/s, and (c) 0.67 µm²/s. These results reflect the effects of pore confinement on bacterial diffusion rates through porous media, where smaller pore size distributions result in more pore confinement and slower diffusion.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  Comparing our simulated diffusivities to the experimentally measured values [Bhattacharjee & Datta, 2019], we found that our simulations yielded diffusivities approximately (0.88 ± 0.14) times the measured values - about 14% higher on average. This is quite good considering that hop times and detailed reorientation direction distributions were ignored in our model. The measured diffusivities were reported to the nearest 0.5 µm²/s, so our simulated values for pore sizes 1.9 µm and 2.5 µm agree quite well within this level of experimental precision. Our simulated diffusivity for 3.6 µm pores is closer to 2.5 µm²/s than the reported measured value of approximately 2.0 µm²/s, which we attribute to bacteria spending less time trapped and more time hopping in larger pores.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  Since our model assumes hopping time to be negligible, we always underestimate the total transition times and therefore our simulated values systematically overestimate the measured diffusivities. Despite this limitation, the agreement between simulation and experiment demonstrates that our subvolume KMC approach effectively captures the essential physics of bacterial transport in porous media.
{{< /typography >}}
<br>
{{< typography font="Roboto Serif" size="23px" weight="100">}}
  For more details, please see our <a href='/uploads/KMC_Bacteria_Hopping_And_Trapping.pdf'>project notes</a> or visit the <a href='https://github.com/cdalas2/KMC_Diffusion_In_Inhomogenous_Media_Projects'>GitHub repository</a> for the full implementation.
{{< /typography >}}
