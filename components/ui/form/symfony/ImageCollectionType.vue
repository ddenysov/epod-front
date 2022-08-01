<template>
  <ValidationProvider :custom-messages="messages" :rules="rules" :name="name" v-slot="{ errors }">
    <el-form-item :error="errors[0]">
      <template slot="label">
        <ui-form-label
          :label="label"
          :description="description"
        />
      </template>
      <div class="content-holder mt-4">
        <el-upload
          ref="uploader"
          class="upload-demo"
          action="/api/image/upload"
          :on-change="handlePreview"
          list-type="picture-card">
          <el-button size="small" type="primary">Click to upload</el-button>
          <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
      </div>
    </el-form-item>
  </ValidationProvider>
</template>

<script>
import FormItem from '@/components/ui/form/mixins/FormItem';

export default {
  /**
   * Component name
   */
  name: 'ImageCollectionType',

  /**
   * Mixins
   */
  mixins: [FormItem],

  data () {
    return {
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    };
  },
  methods: {
    handlePreview (file) {
      console.log(this.$refs.uploader.uploadFiles);
      this.innerData = JSON.parse(JSON.stringify(this.$refs.uploader.uploadFiles.map((item) => item.response)));
    },
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
