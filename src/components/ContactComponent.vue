<template>
    <div class="container-sm d-flex justify-content-center" id="primary-container">

        <div class="contact-form">

            <div class="contact-us">
                <h1 class="text-uppercase m-0">Contact us</h1>
            </div>
            <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo!
            </div>
            <form @submit.prevent="sendForm()">
                <!-- Name input -->
                <div class="mb-5">
                    <input required type="text" id="form4Example1" class="input-style form-control" placeholder="Name" name="name" :class="{'is-invalid': errors.name}" v-model="name"/>
                    <p v-for="(error,index) in errors.name" :key="index" class="invalid-feedback">
                    {{ error }}
                    </p>
                </div>

                <!-- Email input -->
                <div class="mb-5">
                    <input required type="email" id="form4Example2" class="input-style form-control" placeholder="Email" name="email" :class="{'is-invalid': errors.email}" v-model="email"/>
                    <p v-for="(error,index) in errors.email" :key="index" class="invalid-feedback">
                    {{ error }}
                    </p>
                </div>

                <!-- Message input -->
                <div class="mb-5">
                    <textarea required class="input-style form-control" id="form4Example3" rows="4" placeholder="Message" name="message" :class="{'is-invalid': errors.message}" v-model="message"></textarea>
                    <p v-for="(error,index) in errors.message" :key="index" class="invalid-feedback">
                    {{ error }}
                    </p>
                </div>


                <!-- Submit button -->
                <div class="button-position d-flex justify-content-between align-items-center" id="button-media">
                    <!-- Checkbox -->
                    <div class=" d-flex justify-content-center align-items-center p-0">
                        <input class="form-check me-2" type="checkbox" value="" id="form4Example4" name="" checked />
                        <label class="form-check-label" for="form4Example4">
                            Send me a copy of this message
                        </label>
                    </div>
                    <button type="submit" :disabled="loading">{{loading ? 'Sending...' : 'Invia'}}</button>
                </div>
            </form>

        </div>

        <div class="contact-image">
            <img src="../img/beauty-product.jpg" alt="beauty">
        </div>

    </div>

    <div class="maps">
        <div class="container-sm d-flex align-items-center justify-content-center pb-5" id="call-us">
            <div class="details">
                <h2 class="text-uppercase">Call us</h2>
                <span>(255) 352-6258</span>
            </div>
            <div class="details-image">
                <img src="../img/beauty-contact.png" alt="beauty-contact">
            </div>
        </div>

        <h6 class="text-uppercase m-4 fw-bold">Search us</h6>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d358195.89843116904!2d8.5754299!3d45.4616357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c22ab05c3bbf%3A0xa481aa5be8d54a11!2sBoolean%20SRLS!5e0!3m2!1sit!2sit!4v1674663934196!5m2!1sit!2sit"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script>
import axios from 'axios';
import {store} from '../store';

export default {
    name: 'ContactComponent',
    data(){
            return {
                store,
                name: '',
                email: '',
                message: '',
                success: false,
                errors: {},
                loading: false
            }
        },
        methods: {
            sendForm(){
            this.loading = true;
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
                axios.post(`${this.store.apiUrl}/contacts`, data).then((response)=>{
                    console.log(response.data);
                    this.success = response.data.success;
                    if(!this.success){
                        this.errors = response.data.errors;
                    }else{
                        this.name = '',
                        this.email = '';
                        this.message = '';
                    }
                    this.loading = false;
                })
            }
        }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.container-sm {
    margin-top: 120px;
    color: $rich-green;


    .contact-form {


        .contact-us {
            // color: $rich-green;
            padding: 64px 142px;
            border: 18px solid $rich-green;
            margin-bottom: 94px;

            h1 {
                font-weight: $font-w-bold;
            }

        }


        form {
            padding: 0 18px;



            .input-style {
                all: unset;
                width: 100%;
                padding-bottom: 14px;
                border-bottom: 2px solid $form-border;

                &::placeholder {
                    color: black;
                }
            }


            button {
                border: 0px;
                background-color: $form-border;
                color: $lightpink;
                padding: 12px 26px;
                transition: all 0.2s ease-out;

                &:hover {
                    background-color: $pink;
                    color: black;
                }
            }

        }

    }

    .contact-image {
        min-width: 280px;
        height: 900px;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        ;
    }


}


.maps {

    iframe {
        width: 100%;
    }

    .details {

        h2 {
            font-weight: $font-w-bold;
        }

        span {
            font-weight: $font-w-bold;
            font-size: $font-large;
        }

    }

    h6 {
        color: $rich-green;
    }


    .details-image {
        img {

            width: 70%;

        }
    }

}


@media (max-width: 768px) {


    #primary-container {
        display: block !important;



        .contact-us {
            padding: 20px 40px;

            h1 {
                text-align: center;
            }
        }

        .contact-image {
            display: none;
        }

    }



    #call-us {
        display: block !important;
    }


    .details {
        text-align: center;
        margin-bottom: 46px;
    }


    .details-image {
        img {

            width: 100% !important;

        }
    }

}


@media (max-width: 520px) {

    #button-media {
        display: block !important;

        div {
            justify-content: start !important;
        }

        button {
            margin-top: 24px;
        }
    }

}
</style>