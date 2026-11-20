<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import type { ComponentPublicInstance } from "vue"
import { awards } from "@/data/awards"
import { experiences } from "@/data/experience"
import { publications } from "@/data/publications"
import { projects } from "@/data/projects"
import ResearchEntry from "@/components/ResearchEntry.vue"

const researchWorks = [...publications, ...projects]

const timelineRef = ref<HTMLElement | null>(null)
const experienceBadges = ref<(HTMLElement | null)[]>([])
const forkBox = ref({ width: 76, height: 1 })
const forkPaths = ref<string[]>([])
const githubStars = ref<Record<string, number | null | undefined>>(getInitialGithubStars())
let timelineObserver: ResizeObserver | undefined

const forkViewBox = computed(() => `0 0 ${forkBox.value.width} ${forkBox.value.height}`)

function getInitialGithubStars() {
  return researchWorks.reduce<Record<string, number>>((stars, publication) => {
    if (publication.github_repo && publication.github_stars !== undefined) {
      stars[publication.github_repo] = publication.github_stars
    }

    return stars
  }, {})
}

async function fetchGithubStars() {
  const repos = [...new Set(researchWorks
    .map((publication) => publication.github_repo)
    .filter((repo): repo is string => Boolean(repo)))]

  await Promise.all(repos.map(async (repo) => {
    if (githubStars.value[repo] === undefined) {
      githubStars.value = { ...githubStars.value, [repo]: undefined }
    }

    try {
      const response = await fetch(`https://api.github.com/repos/${repo}`)

      if (!response.ok) {
        throw new Error(`GitHub API responded with ${response.status}`)
      }

      const data = await response.json() as { stargazers_count?: number }
      githubStars.value = { ...githubStars.value, [repo]: data.stargazers_count ?? null }
    } catch {
      if (githubStars.value[repo] === undefined) {
        githubStars.value = { ...githubStars.value, [repo]: null }
      }
    }
  }))
}

function setExperienceBadge(el: Element | ComponentPublicInstance | null, index: number) {
  experienceBadges.value[index] = el instanceof Element ? el as HTMLElement : null
}

function updateForkLines() {
  const timeline = timelineRef.value
  const badges = experienceBadges.value

  if (!timeline || badges.length < 3 || badges.some((badge) => !badge)) {
    return
  }

  const timelineRect = timeline.getBoundingClientRect()
  const markerWidth = timeline.querySelector(".experience-marker")?.getBoundingClientRect().width ?? 76
  const centers = badges.slice(0, 3).map((badge) => {
    const rect = badge!.getBoundingClientRect()
    return {
      x: rect.left - timelineRect.left + rect.width / 2,
      y: rect.top - timelineRect.top + rect.height / 2,
    }
  })

  const [ant, phd, bachelor] = centers
  const leftEdge = Math.max(6, Math.min(ant.x, phd.x, bachelor.x) - 24)
  const shortBend = Math.max(leftEdge, bachelor.x - 16)
  const longBend = Math.max(leftEdge, bachelor.x - 32)

  forkBox.value = {
    width: Math.ceil(markerWidth),
    height: Math.ceil(timelineRect.height),
  }
  forkPaths.value = [
    `M ${bachelor.x} ${bachelor.y} C ${shortBend} ${(bachelor.y + phd.y) / 2}, ${shortBend} ${(bachelor.y + phd.y) / 2}, ${phd.x} ${phd.y}`,
    `M ${bachelor.x} ${bachelor.y} C ${longBend} ${bachelor.y - 56}, ${longBend} ${ant.y + 56}, ${ant.x} ${ant.y}`,
  ]
}

function scheduleForkUpdate() {
  void nextTick(() => {
    updateForkLines()
  })
}

onMounted(() => {
  scheduleForkUpdate()
  void fetchGithubStars()
  timelineObserver = new ResizeObserver(scheduleForkUpdate)
  if (timelineRef.value) {
    timelineObserver.observe(timelineRef.value)
  }
  window.addEventListener("resize", scheduleForkUpdate)
})

onBeforeUnmount(() => {
  timelineObserver?.disconnect()
  window.removeEventListener("resize", scheduleForkUpdate)
})
</script>

<template>
  <v-row class="profile-section mt-4" justify="center" id="card-overview">
    <v-col cols="6" md="3" align-self="center">
      <v-row justify="end">
        <div class="profile-photo-wrap">
          <v-img
          src="/老龙头3.jpg"
          class="d-none d-md-block profile-photo">
          </v-img>
        </div>
        <v-avatar
          size="180"
          class="d-md-none mobile-avatar">
          <v-img
            src="/close_photo2.jpg">
          </v-img>
        </v-avatar>
      </v-row>
    </v-col>
    <v-col cols="12" md="9" align-self="center">
      <v-card variant="text" class="profile-card">
        <v-card-item>
          <v-card-title class="pb-2 pt-2">
            <h2 class="profile-title">Yuzheng Liu | 刘宇政</h2>
          </v-card-title>
          <v-card-text class="mt-4">
            <div class="profile-block">
              <p class="section-label">
                About Me
              </p>
              <p class="profile-copy">
                I am currently a Ph.D. student at the School of Artificial Intelligence,
                <a href="https://english.pku.edu.cn/">Peking University (PKU)</a>,
                supervised by Prof. <a href="https://baoquanchen.info/">Baoquan Chen</a>.
                I earned my Bachelor's degree from the School of EECS, PKU in 2025.
                As a member of <a href="https://vcl.pku.edu.cn/">Visual Computing and Learning Lab (VCL)</a>,
                I'm fortunate to collaborate with Dr. <a href="https://yd-yin.github.io/">Yingda Yin</a>
                and Dr. <a href="https://siyandong.github.io/">Siyan Dong</a>.
              </p>
            </div>
            <div class="profile-block">
              <p class="section-label">
                Research Interests
              </p>
              <ul class="interest-list">
                <li>
                  <span style="font-weight: 600;">3D Perception &amp; Spatial Understanding.</span>
                  <span>
                    Developing real-time 3D perception models for scene reconstruction and understanding from
                    visual streams. Building structured 3D representations and memories that multimodal models
                    can readily use for spatial reasoning and navigation.
                  </span>
                </li>
                <li style="margin-top: 4px;">
                  <span style="font-weight: 600;">World Modeling &amp; Simulation.</span>
                  <span>
                    Developing video generation models that capture world dynamics and support interactive
                    simulation, alongside unified multimodal models for visual understanding and prediction.
                  </span>
                </li>
              </ul>
            </div>
            <!-- <p style="margin-top: 8px">
              I am also the captain of the Chinese Kung Fu team at PKU.
            </p> -->
            <div class="contact-links mt-6">
              <p>
                Email: <a href="mailto:liu_yuzheng@stu.pku.edu.cn">liu_yuzheng@stu.pku.edu.cn</a> <br />
              </p>
              <a href="https://scholar.google.com/citations?user=_0ELEBMAAAAJ&hl=zh-CN&oi=ao" target="_blank" rel="noopener noreferrer">Google Scholar</a> /
              <a href="https://github.com/Ly-kc" target="_blank" rel="noopener noreferrer">GitHub</a>
              <!-- <a href="/cv-shengyuliu.pdf">My CV</a> / -->
              <!-- <a href="/wechat-qrcode.png">WeChat</a> -->
            </div>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <v-divider class="mt-6 mb-4"></v-divider>

  <!-- <v-card variant="text" class="mt-4" id="card-news">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">News</h2>
      </v-card-title>
    </v-card-item>
  </v-card> -->

  <v-card variant="text" class="mt-4" id="card-publications">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Publications</h2>
      </v-card-title>
      <v-card-item>

        <ResearchEntry
          v-for="publication in publications"
          :key="publication.title"
          :work="publication"
          :github-stars="githubStars"
        />

        <p class="publication-note">*: Equal contribution; †: Corresponding author</p>
      </v-card-item>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-4" id="card-projects">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Projects</h2>
      </v-card-title>
      <v-card-item>
        <ResearchEntry
          v-for="project in projects"
          :key="project.title"
          :work="project"
          :github-stars="githubStars"
        />
        <p class="publication-note">*: Equal contribution (co-first authors)</p>
      </v-card-item>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-4" id="card-education">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Education & Experience</h2>
      </v-card-title>
      <v-card-text class="mt-5">
        <div ref="timelineRef" class="experience-timeline">
          <svg class="experience-fork-lines" :viewBox="forkViewBox" aria-hidden="true">
            <path v-for="path in forkPaths" :key="path" :d="path"></path>
          </svg>
          <div
            v-for="(experience, index) in experiences"
            :key="`${experience.organization}-${experience.period}`"
            class="experience-item"
          >
            <div class="experience-marker">
              <div
                :ref="(el) => setExperienceBadge(el, index)"
                :class="['experience-badge', `experience-badge-${experience.variant}`]"
              >
                <img :src="experience.logo" :alt="`${experience.organization} logo`" class="experience-logo" />
              </div>
            </div>
            <div class="experience-content">
              <p class="experience-period">{{ experience.period }}</p>
              <h3 class="experience-organization">{{ experience.organization }}</h3>
              <p class="experience-role">{{ experience.role }}</p>
              <p class="experience-description">{{ experience.description }}</p>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-4" id="card-awards">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Awards</h2>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-list>
          <v-list-item v-for="award in awards" :key="award.name" class="mt-1">
            <template v-slot:prepend>
              <v-icon icon="mdi-circle" size="10"></v-icon>
            </template>
            <v-list-item-title class="text-wrap">
              <h3 style="font-size: 17px" v-html="award.name"></h3>
            </v-list-item-title>
            <p style="font-size: 13px; white-space: normal; text-wrap: wrap; color: #999" v-html="award.year + (award.description ? ', ' : '') + award.description"></p>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card-item>
  </v-card>

  <!-- <v-card variant="text" class="mt-4" id="card-bio">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Bio</h2>

      </v-card-title>
    </v-card-item>
  </v-card> -->

  <v-divider class="mt-10"></v-divider>
  <v-row class="mt-1" justify="center">
    <v-col align-self="center">
      <p class="site-footer">
        © 2026 Yuzheng Liu · Built with
        <a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue 3</a>
        and
        <a href="https://vuetifyjs.com/" target="_blank" rel="noopener noreferrer">Vuetify</a>
        · Source on
        <a href="https://github.com/Ly-kc/Ly-kc.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <p class="visitor-count">
        <v-icon icon="mdi-eye-outline" size="14"></v-icon>
        <img
          src="https://visitor-badge.laobi.icu/badge?page_id=Ly-kc.ly-kc.github.io"
          alt="Page views"
          style="vertical-align: middle; margin-left: 4px;"
        />
      </p>
    </v-col>
  </v-row>
</template>
