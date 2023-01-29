<template>
    <div class="parallax">
        <section class="container">
            <!-- cards container  -->
            <div class="cards-container">
                <!--  card -->
                <div class="card single-card bg-team" v-for="(member, i) in team" :key="i">
                    <!-- <div class="white-stripe">
                        <span>{{}}</span>
                    </div> -->
                    <!--  img -->
                    <div class="pt-4 pb-3 d-flex justify-content-center align-items-center">
                        <img class="img-profile" :src="member.image" :alt="member.name">
                    </div>
                    <!-- body -->
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <!-- person -->
                        <div class="profile-person">
                            <span class="profile-name ">{{member.name}}</span>
                            <span class="profile-qualification ">{{member.qualification}}</span>
                            <p class="profile-description">{{member.description}}</p>
                        </div>
                        <!-- social -->
                        <div class="profile-social">
                            <a href="#nogo"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#nogo"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#nogo"><i class="fa-brands fa-telegram"></i></a>
                            <a :href="member.github" target="blank"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'AboutUs',
        data(){
            return {
                team: [
                    {
                        name: 'leonardo',
                        image: 'https://avatars.githubusercontent.com/u/108693204?v=4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora enim pariatur saepe illo impedit?',
                        qualification:'Full Stack Developer',
                        github: 'https://github.com/leonardopozzan',
                    },
                    {
                        name: 'valentina',
                        image: 'https://avatars.githubusercontent.com/u/107954392?v=4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora enim pariatur saepe illo impedit?',
                        qualification:'Full Stack Developer',
                        github: 'https://github.com/ValentinaZussino',
                    },
                    {
                        name: 'riccardo',
                        image: 'https://avatars.githubusercontent.com/u/64532705?v=4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora enim pariatur saepe illo impedit?',
                        qualification:'Full Stack Developer',
                        github: 'https://github.com/RiccardoPellegrino',
                    },
                    {
                        name: 'alessandro',
                        image: 'https://avatars.githubusercontent.com/u/107110444?v=4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora enim pariatur saepe illo impedit?',
                        qualification:'Full Stack Developer',
                        github: 'https://github.com/Alessandro-Sebastiano',
                    },
                    {
                        name: 'fabio',
                        image: 'https://avatars.githubusercontent.com/u/108491866?v=4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora enim pariatur saepe illo impedit?',
                        qualification:'Full Stack Developer',
                        github: 'https://github.com/MartinelliFabio',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.parallax {
    background-image: url('../img/pexels-ray-piedra-2721977.jpg');
    background-position: center;
    background-size: cover;
}
section {
    padding: 100px;

    .cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

        // .bg-team{
        //     background-color: transparent;
        //     backdrop-filter: blur(15px);
        //     border-radius: 10px;
        //     border-right: 1px solid rgba(255, 255, 255, 0.5);
        //     border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        // }            

        .single-card {
            width: 80%;
            margin: 25px auto;
            color: $rich-green;
            cursor: pointer;
            border: 1px solid $pink;
            border-radius: 0;
            box-shadow: 8px 7px 6px $rich-green;
            transition: 0.3s;
            overflow: hidden;
            position: relative;


            .white-stripe{
                position: absolute;
                top: 25px;
                left: -60px;
                height: 45px;
                width: 220px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                background-color: white;
                transform: rotate(-45deg);
                box-shadow: 3px 3px 3px black;
            }

            .img-profile{
                width: 55%;
                height: 100%;
            }

            .card-body{
                padding-bottom: 40px;
                line-height: 1.8;

                .profile-person {
                    text-align: center;
                    
                    .profile-name {
                        display: block;
                        font-size: $font-medium-large;
                        font-weight: bold;
                        letter-spacing: 0.8px;
                        text-transform: uppercase;
                    }
                    .profile-qualification {
                        display: block;
                        font-size: $font-medium;
                        font-weight: bold;
                        color: $pink;
                        letter-spacing: 0.8px;
                    }
                    .profile-description{
                    padding: 15px 30px;
                    font-size: $font-small;
                    }
                }

                .profile-social{
                    font-size: 22px;

                    a {
                        i {
                            color: $rich-green;
                            margin-right: 10px;
                            transition: all 0.5s;

                            &:hover{
                                color: $pink;
                                scale: 1.2;
                            } 
                        } 
                    }
                }
            }

            &:hover {
                box-shadow: blue;
            }
        }
    }
}


@media screen and (min-width:992px) {
    section {
        .cards-container {
                .single-card{
                width: calc(100% / 2 - 80px);
                margin: 35px 40px;
            }
        }
    }  
}

@media screen and (min-width:1200px) {
    section {
        .cards-container {
                .single-card{
                width: calc(100% / 3 - 56px);
                margin: 50px 28px;
            }
        }
    }   
}
</style>