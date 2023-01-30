<template>
    <div class="parallax">
        <section class="container">
            <!-- cards container  -->
            <div class="cards-container">
                <!--  card -->
                <div class="card single-card" v-for="(member, i) in team" :key="i">
                    <!-- content -->
                    <div class="card-content">
                        <!-- front -->
                        <div class="front">
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

                        <!-- back -->
                        <div class="back d-flex flex-column justify-content-center align-items-center">
                            <p class="profile-description">
                            <span>About me:</span>
                            {{member.description}}
                            </p>
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
            </div>
        </section>
    </div>
    <ChatComponent />
    <ScrollTopComponent />
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
    height: 100%;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
section {
    padding: 100px;

    .cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

        .single-card {
            width: 85%;
            margin: 25px auto;
            background: transparent;
            color: $rich-green;
            cursor: pointer;
            border-radius: 0;
            transition: 0.3s;
            perspective: 1000px;
            height: 500px;
            border: none;
            
            &:hover .card-content {
                transform: rotateY( 180deg ) ;
            }
            
            .card-content {
                position: absolute;
                width: 100%;
                height: 100%;
                transition: transform 1s;
                transform-style: preserve-3d;
                border: 2px solid $rich-green;
                .front {
                    padding: 25px 0px;
                    // box-shadow: 8px 8px 10px rgba(62, 62, 62, 0.76);

                    .img-profile{
                        width: 68%;
                        height: 100%;
                        border: 2px solid $rich-green;
                    }

                    .card-body{
                        padding-bottom: 40px;
                        line-height: 1.8;

                        .profile-person {
                            text-align: center;
                            
                            .profile-name {
                                display: block;
                                font-size: $font-medium-plus;
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
                            padding-top: 25px;

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
                }

                .front,
                .back {
                position: absolute;
                height: 100%;
                width: 100%;
                background: white;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;

                .profile-social{
                            font-size: 22px;
                            padding-top: 25px;

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

                .back {
                    padding: 25px 30px;
                    background: white;
                    color: $rich-green;
                    text-align: center;
                    transform: rotateY( 180deg );
                    // box-shadow: 8px 8px 10px rgba(62, 62, 62, 0.76);


                    span {
                        font-size: $font-medium-plus;
                        font-weight: bold;
                        display: block;
                        padding-bottom: 15px;
                    }
                }
            }
            
        }
    }
}

@media screen and (min-width:768px) {
    section {
        .cards-container {
                .single-card{
                width: 70%;
                margin: 35px auto;
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