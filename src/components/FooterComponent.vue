<template>
    <footer>
        <div class="footer-container container-sm py-5 d-flex align-items-center justify-content-between">
            <form>
                <!-- Name input -->
                <div class="form-outline mb-4">
                    <input type="text" id="form4Example1" class="form-control" />
                    <label class="form-label" for="form4Example1">Name</label>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email" id="form4Example2" class="form-control" />
                    <label class="form-label" for="form4Example2">Email address</label>
                </div>

                <!-- Message input -->
                <div class="form-outline mb-4">
                    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                    <label class="form-label" for="form4Example3">Message</label>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                    <label class="form-check-label" for="form4Example4">
                        Send me a copy of this message
                    </label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block">Send</button>
            </form>
            <div class="contacts align-self-start">
                contacts
            </div>
            <div class="follow d-flex flex-column justify-content-between">

                <div class="title">
                    <h3>Follow</h3>
                </div>

                <div class="icons">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <div class="h-25"></div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

footer {
    background-color: $gray;
    border: 1px solid red;


    .footer-container {
        height: 60vh;
    }


    form {

        width: 30%;
        height: 100%;

    }


    .follow {
        height: 100%;
    }


}
</style>