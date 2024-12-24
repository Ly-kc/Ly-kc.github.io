<script setup lang="ts">
import { ref } from "vue"
import { awards } from "@/data/awards"
import { publications } from "@/data/publications"
import { projects } from "@/data/projects"

</script>

<template>
  <v-row class="mt-4" justify="center" id="card-overview">
    <v-col cols="6" md="3" align-self="center">
      <v-row justify="center">
        <div style="width: 80%">
          <v-img
            src="/photo_white2.jpg"
            class="d-none d-md-block w">
          </v-img>
        </div>
        <v-avatar
          size="150"
          class="d-md-none"
          style="">
          <v-img
            src="/close_photo2.jpg">
          </v-img>
        </v-avatar>
      </v-row>
    </v-col>
    <v-col cols="12" md="9" align-self="center">
      <v-card variant="text">
        <v-card-item>
          <v-card-title class="pb-2 pt-2">
            <h2 style="text-align: center;">Yuzheng Liu | 刘宇政</h2>
          </v-card-title>
          <v-card-text class="mt-4">
            <p style="margin-top: 14px;">

              I am currently a 4th-year undergraduate student at the School of EECS, 
              <a href="https://english.pku.edu.cn/">Peking University (PKU)</a>,
              supervised by Prof. <a href="https://baoquanchen.info/">Baoquan Chen</a>.
              As a member of <a href="https://vcl.pku.edu.cn/">Visual Computing and Learning Lab (VCL)</a>, 
              I'm also fortunate to collaborate with Dr. <a href="https://yd-yin.github.io/">Yingda Yin</a>
              and Dr. <a href="https://siyandong.github.io/">Siyan Dong</a>.
            </p>
            <p style="margin-top: 8px">
              My research focuses on <b>3D computer Vision</b>.
              I am passionate about integrating human priors about the three-dimensional world with large models to enhance <b>3D scene understanding</b>.
              I am also interested in leveraging deep learning methods to address traditional challenges in <b>computer graphics</b>, such as <b>3D scene reconstruction</b>.
            </p>
            <!-- <p style="margin-top: 8px">
              I am also the captain of the Chinese Kung Fu team at PKU.
            </p> -->
            <div class="mt-6" style="text-align: center">
              <p style="font-size: 15px;">
                Email: <a href="mailto:liu_yuzheng@stu.pku.edu.cn">liu_yuzheng@stu.pku.edu.cn</a> <br />
              </p>
              <a href="https://scholar.google.com/citations?user=_0ELEBMAAAAJ&hl=zh-CN&oi=ao">Google Scholar</a> / 
              <a href="https://github.com/Ly-kc">GitHub</a> 
              <!-- <a href="/cv-shengyuliu.pdf">My CV</a> / -->
              <!-- <a href="/wechat-qrcode.png">WeChat</a> -->
            </div>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <v-divider class="mt-10 mb-4"></v-divider>

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
        
        <v-row v-for="publication in publications" style="display: flex; align-items: center; margin-top: 0px; margin-bottom: 20px;" >
          <!-- 图片列 -->
          <!-- <v-col cols="auto" style="margin-right: 16px;">
            <v-img :src="publication.img_path" style="max-width: 280px; display: block;"></v-img>
          </v-col> -->
          <v-col cols="15" md="3" style="max-width: 280px;">
            <v-img :src="publication.img_path" style="max-width: 280px;"></v-img>
          </v-col>
          <!-- 垂直分隔线 -->
          <v-divider vertical></v-divider>

          <!-- 内容列 -->
          <v-col cols="12" md="9">
            <a :href="publication.link" target="_blank" v-html="publication.title" style="font-size: 20px; font-weight: 600; color: #333;"></a>
            <p v-html="publication.authors" style="font-size: 15px; margin-top: 2px;"></p>
            <p v-html="publication.submit_status" style="font-size: 16px; color: #555; margin-top: 2px;"></p>
            <v-row v-if="publication.arxiv || publication.page || publication.code" style="font-size: 15px; display: flex; flex-wrap: nowrap;">
              <v-col v-if="publication.arxiv" cols="auto" style="margin-right: 2px;">
                <a :href="publication.arxiv" target="_blank">ArXiv</a>
              </v-col>
              <v-col v-if="publication.page" cols="auto" style="margin-right: 2px;">
                <a :href="publication.page" target="_blank">Project Page</a>
              </v-col>
              <v-col v-if="publication.code" cols="auto">
                <a :href="publication.code" target="_blank">Code</a>
              </v-col>
            </v-row>
            <p v-html="publication.description" style="font-size: 16px; color: #777; margin-top: 2px;"></p>
          </v-col>
        </v-row>


        <p style="color: #888; font-size: 14px; margin-top: 20px;">*: Equal contribution; †: Corresponding author</p>
      </v-card-item>
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

  <v-card variant="text" class="mt-2" id="card-projects">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Projects</h2>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-row v-for="project in projects" class="mt-1">
          <v-col>
            <p><a :href="project.link" target="_blank" v-html="project.name" style="font-size: 17px"></a></p>
            <p v-html="project.description" style="font-size: 14px; color: #999; margin-top: 2px;"></p>
            <p v-html="project.time" style="font-size: 14px; color: #999; margin-top: 2px;"></p>
          </v-col>
        </v-row>
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
      <p style="text-align: center; font-size: 12px; color: #aaa; line-height: 1.5;">
        <v-icon icon="mdi-xml"></v-icon> with <v-icon icon="mdi-heart"></v-icon> by Shengyu Liu <br />
        Built on <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a> and <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a> <br />
        Feel free to steal this website's source code at <a href="https://github.com/interestingLSY/interestingLSY.github.io" target="_blank">GitHub</a>
      </p>
      <p style="text-align: center;" class="mt-2">
        <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fly-kc.github.io&count_bg=%2388EEFF&title_bg=%23DDDDDD&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true"/></a>
      </p>
    </v-col>
  </v-row>
</template>
