<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import type { Publication } from "@/data/publications"

const props = defineProps<{
  work: Publication
  githubStars: Record<string, number | null | undefined>
}>()

const activePreview = ref(0)
const sequence = computed(() => props.work.preview_sequences?.[activePreview.value] ?? {
  frames: props.work.preview_frames,
  alt: props.work.img_alt,
  caption: props.work.preview_caption,
})
let previewTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const sequences = props.work.preview_sequences
  if (!sequences || sequences.length < 2) return

  // Load both examples before their first switch.
  for (const frame of sequences.flatMap((preview) => preview.frames)) {
    const image = new Image()
    image.src = frame
  }
  previewTimer = setInterval(() => {
    activePreview.value = (activePreview.value + 1) % sequences.length
  }, 3500)
})

onBeforeUnmount(() => clearInterval(previewTimer))

function formatStarCount(count: number | null | undefined) {
  return count === undefined ? "..." : count === null ? "--" : String(count)
}
</script>

<template>
  <v-row class="publication-row">
    <v-col cols="12" md="4" class="publication-image-col">
      <a
        :href="work.link"
        target="_blank"
        rel="noopener noreferrer"
        class="research-preview-link"
        :aria-label="`View ${work.title}`"
      >
        <figure v-if="sequence.frames" class="sequence-preview">
          <div class="sequence-grid" role="img" :aria-label="sequence.alt">
            <div v-for="(frame, index) in sequence.frames" :key="frame" class="sequence-frame">
              <img
                :src="frame"
                alt=""
                loading="lazy"
                width="576"
                :height="576 / (work.preview_aspect_ratio || 1.5)"
                :style="{ aspectRatio: String(work.preview_aspect_ratio || 1.5) }"
              />
              <span aria-hidden="true">{{ index + 1 }}</span>
            </div>
          </div>
          <figcaption>{{ sequence.caption }}</figcaption>
        </figure>
        <figure v-else class="static-preview">
          <v-img
            :src="work.img_path"
            :alt="work.img_alt || work.title"
            :aspect-ratio="work.preview_caption ? 16 / 9 : undefined"
            class="publication-image"
            :class="{ 'publication-image-captioned': work.preview_caption }"
          ></v-img>
          <figcaption v-if="work.preview_caption">{{ work.preview_caption }}</figcaption>
        </figure>
      </a>
    </v-col>
    <v-divider vertical class="d-none d-md-block"></v-divider>
    <v-col cols="12" md="8" class="publication-content">
      <div class="publication-title-row">
        <a :href="work.link" target="_blank" rel="noopener noreferrer" class="publication-title">{{ work.title }}</a>
        <a
          v-if="work.github_repo && work.code"
          :href="work.code"
          target="_blank"
          rel="noopener noreferrer"
          class="github-star-badge"
        >
          <span>Github</span>
          <v-icon icon="mdi-star-outline" size="16"></v-icon>
          <span>{{ formatStarCount(githubStars[work.github_repo]) }}</span>
        </a>
      </div>
      <p v-html="work.authors" class="publication-authors"></p>
      <p v-html="work.submit_status" class="publication-status"></p>
      <div v-if="work.page || work.code || work.other_links || work.arxiv" class="publication-links">
        <a v-if="work.page" :href="work.page" target="_blank" rel="noopener noreferrer" class="publication-link">Project Page</a>
        <a v-if="work.code" :href="work.code" target="_blank" rel="noopener noreferrer" class="publication-link">Code</a>
        <a v-for="(link, name) in work.other_links" :key="name" :href="link" target="_blank" rel="noopener noreferrer" class="publication-link">{{ name }}</a>
        <a v-if="work.arxiv" :href="work.arxiv" target="_blank" rel="noopener noreferrer" class="publication-link">ArXiv</a>
      </div>
      <p v-html="work.description" class="publication-description"></p>
    </v-col>
  </v-row>
</template>
