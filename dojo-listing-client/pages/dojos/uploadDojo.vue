<template>
    <div>
      <b-container>
        <b-form @submit.prevent="upload">
            <b-form-group
            id="titleset"
            description="Let us know the dojo title."
            label="Enter the dojo title"
            label-for="title">
              <b-form-input id="title" v-model="title" trim></b-form-input>
            </b-form-group>
            <b-form-group
            id="kanchouset"
            description="Let us know the dojo leader."
            label="Who is the kanchou?"
            label-for="kanchou">
              <b-form-input id="kanchou" v-model="kanchou" trim></b-form-input>
            </b-form-group>
            <b-form-file
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose a photo for your dojo"
            accept=".jpg, .png, .gif">
            </b-form-file>
            <div class="mt-3">Selected file: {{ file1 ? file1.name : ''}}</div>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-container>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    data() {
        return {
            title: '',
            kanchou: '',
            file1: null
        }
    },
    methods: {
      
        async upload() {
          try {
            const dojo = await this.$axios.$post('/api/dojos', {
            title: this.title,
            kanchou: this.kanchou,
            })
      
            this.file1.metadata = await this.$axios.$get(`/api/dojos/${dojo._id}`)
            await this.$axios.post('/api/upload', this.file1);
            await this.$router.push("/dojos/dojos");
          }
          catch(error) {
            console.log(error);
          }
          finally {
            console.log(this.file1);
          }
        }
    }
}
</script>
