<template>
  <div class="about">
    <h1 class="display-6 fw-bold">
      About Me: A Passionate Software Engineer and Process Enthusiast
    </h1>

    <p>
      <small>
        <b>Greetings!</b> I am a seasoned Software Engineer with over 8 years of
        diverse experience, primarily focusing on Backend development and server
        management. Throughout my career journey, I have had the privilege of
        crafting exceptional applications, leading projects with finesse, and
        assisting in nurturing long-lasting relationships with esteemed clients.
        <br /><b>Allow me to share my story with you.</b>
      </small>
    </p>

    <div class="fs-6">
      <h3>Technical Versatility and Generalist Approach:</h3>
      <p>
        I consider myself a technical generalist, constantly expanding my skill
        set across various programming languages and technologies. From the
        dynamic world of JavaScript to the robustness of PHP, Java, Dart,
        Python, and even the emerging realms of Julia, I have had the
        opportunity to immerse myself deeply. This versatility allows me to
        choose the right tools for each project, ensuring that the solutions I
        create are not just functional, but also optimized for efficiency and
        scalability.
      </p>

      <h3>Mastering the Art of Server Management:</h3>
      <p>
        In addition to my coding prowess, I have honed my skills as a Linux
        Server administrator, overseeing large-scale production environments.
        The intricate dance of keeping servers optimized, secure, and responsive
        is a challenge I embrace with enthusiasm. Navigating the complexities of
        server management within full Agile environments has equipped me with a
        deep understanding of how to balance technical demands with rapid,
        iterative development cycles.
      </p>

      <h3>A Passion for Processes:</h3>
      <p>
        My affinity for processes sets me apart. I believe that a well-defined
        and optimized process is the backbone of any successful project. From
        inception to deployment, I take pride in orchestrating workflows that
        foster collaboration, efficiency, and transparency. My dedication to
        refining these processes stems from my belief that they not only enhance
        the quality of work but also contribute to creating seamless experiences
        for both teams and end-users.
      </p>

      <h3>Embarking on the Blockchain and Web3 Journey:</h3>
      <p>
        Recognizing the transformative potential of blockchain technology and
        the decentralized Web3 ecosystem, I am currently deep-diving into this
        exciting terrain. My commitment to continuous learning drives me to
        explore new horizons and integrate innovative solutions. As the digital
        landscape evolves, I am eager to harness the power of blockchain to
        revolutionize industries and deliver unprecedented value to users.
      </p>

      <h3>Crafting Experiences and Building Relationships:</h3>
      <p>
        Throughout my career, I have had the privilege of collaborating with
        high-profile individuals and guiding projects to successful fruition.
        This experience has endowed me with invaluable insights into the nuances
        of creating exceptional user experiences and maintaining fruitful client
        relationships. The blend of technical expertise, process finesse, and a
        keen understanding of client dynamics enables me to consistently deliver
        outstanding outcomes.
      </p>

      <h3>The Road Ahead:</h3>
      <p>
        As I navigate through the dynamic realm of technology, my commitment to
        growth remains steadfast. I view each challenge as an opportunity to
        learn and innovate. Whether it's deciphering complex algorithms or
        orchestrating seamless project management, I am driven by a desire to
        continually enhance my skills and contribute to the ever-evolving
        landscape of software engineering.
      </p>
    </div>

    <div class="summary">
      <p class="fw-bold">
        In summary, I am a Software Engineer who thrives on technical
        challenges, process optimization, and the pursuit of groundbreaking
        technologies. My journey has been marked by versatility, a deep-rooted
        passion for innovation, and a relentless drive to create remarkable
        experiences. As I continue to evolve and explore new frontiers, I am
        excited to embrace the future with an open mind and a determination to
        leave a lasting impact.
      </p>

      <p class="fw-light">
        Thank you for taking the time to get to know me better. If you're as
        passionate about technology, processes, and innovation as I am, I would
        be delighted to connect and share insights on our shared journey.
      </p>
    </div>

    <div class="text-center">
      <button class="btn btn-dark btn-lg" @click="toggleCalendar">
        Book a free session
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject } from "vue";

const toggleCalendar = inject("toggleCalendar", () => null);
</script>
<style lang="scss" scoped>
p {
  text-align: justify;
  text-justify: inter-word;
}
</style>
