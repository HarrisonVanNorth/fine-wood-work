import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import FormData from 'form-data'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: [],
    token: '',
    images: [],
    testimonials: [],
    alert: null,
  },
  mutations: {
    //Login
    getUser(state, payload) {
      state.user = payload.user
      state.token = payload.token
    },
    //Images
    receiveImages(state, payload) {
      state.images = [...payload.images]
    },
    receiveAdd(state, payload) {
      state.images = [ ...state.images, payload.images]
      state.alert = payload.alert
    },
    receiveDelete(state, payload) {
      state.images = state.images.filter(image => image.id !== payload.id)
    },
    //Testimonials
    receiveTestimonials(state,payload) {
      state.testimonials = [...payload.testimonials]
    },
    receiveAdded(state, payload) {
      state.testimonials = [...state.testimonials, payload]
    },
    receiveApproved(state, payload) {
      state.testimonials = state.testimonials.filter(testimonial => testimonial.id !== payload.id)
    },
    receiveRemove(state, payload) {
      state.testimonials = state.testimonials.filter(testimonial => testimonial.id !== payload.id)
    },
  },
  getters: {
    getImages: state => state.images
  },
  actions: {
    //Login
    async postLogin(context, user) {
      try {
        const res = await axios.post('http://localhost:8000/login', user);
        // console.log('router', user.router)
        context.commit('getUser', { user: res.data.user, token: res.data.token })

        // user.router.push({ path: '/AdminImg'})
      } catch (error) {
        context.commit('getUser')
      }
    },
    //Images
    async getImages(context, token) {
      try {
        const res = await axios.get('http://localhost:8000/images');
        context.commit('receiveImages', { images: res.data.images })
        console.log(res.data.alert)
      } catch (error) {
        throw new Error(error);
      }
    },
    async postUpload(context, fileUpload) {
      let data = new FormData();
      data.append('file', fileUpload.upload, fileUpload.upload.name);
      data.append('category', fileUpload.category);
      try {
        const res = await axios.post('http://localhost:8000/upload', data, {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          }});
        context.commit('receiveAdd', res.data )
      } catch (error) {
        throw new Error(error);
      }
    },
    async postDelete(context, key) {
      try {
        const res = await axios.delete(`http://localhost:8000/delete/${key}`);
        context.commit('receiveDelete', { id: res.data })
      } catch (error) {
        throw new Error(error);
      }
    },
    //Testimonials
    async getTestimonials(context, token) {
      try {
        const res = await axios.get('http://localhost:8000/testimonials');
        context.commit('receiveTestimonials', res.data )
      } catch (error) {
        throw new Error(error);
      }
    },
    async postTestimonial(context, testimonial) {
      try {
        const res = await axios.post('http://localhost:8000/testimonials', testimonial);
        context.commit('receiveAdded', res.data )
      } catch (error) {
        throw new Error(error);
      }
    },
    async putApproved(context, id) {
      try {
        const res = await axios.put(`http://localhost:8000/testimonials/${id}`);
        context.commit('receiveApproved', { id: res.data })
      } catch (error) {
        throw new Error(error);
      }
    },
    async postRemove(context, id) {
      try {
        const res = await axios.delete(`http://localhost:8000/testimonials/${id}`);
        context.commit('receiveRemove', { id: res.data })
      } catch (error) {
        throw new Error(error);
      }
    },
  }
})