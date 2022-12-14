<template>
    <div>
        <el-alert :closable="false">这是首页</el-alert>
        <div ref="editor"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WangEditor from 'wangeditor'

/**
 * App
 *
 * @author 冰凝
 * @date 2022-12-14 9:59
 */
@Component
export default class App extends Vue {

    public mounted() {
        const editor = new WangEditor(this.$refs.editor as HTMLDivElement)
        editor.create()
    }

}
</script>

<style lang="sass" scoped>

</style>
