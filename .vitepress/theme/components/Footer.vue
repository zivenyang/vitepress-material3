<template>
    <v-footer absolute>
        <v-container fluid>
            <div class="squiggle"><svg _ngcontent-ehq-c18="" aria-hidden="true" width="100%" height="8" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <pattern _ngcontent-ehq-c18="" id="a" width="91" height="8" patternUnits="userSpaceOnUse">
                        <g _ngcontent-ehq-c18="" clip-path="url(#clip0_2426_11367)">
                            <path _ngcontent-ehq-c18=""
                                d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                                stroke="#E1E3E1" stroke-linecap="square"></path>
                        </g>
                    </pattern>
                    <rect _ngcontent-ehq-c18="" width="100%" height="100%" fill="url(#a)"></rect>
                </svg>
            </div>
            <v-container class="content-container">
                <v-row>
                    <v-col>
                        <v-list-item>
                            <template v-slot:prepend>
                                <v-avatar color="grey-darken-3"
                                    image="https://avatars.githubusercontent.com/u/26645341?v=4"></v-avatar>
                            </template>

                            <v-list-item-title>Ziwen</v-list-item-title>

                            <v-list-item-subtitle>Hello world</v-list-item-subtitle>

                            <template v-slot:append>
                                <div class="justify-self-end">
                                    <v-btn icon="mdi-github" variant="text"></v-btn>
                                    <v-btn icon="mdi-twitter" variant="text"></v-btn>
                                    <v-btn icon="mdi-youtube" variant="text"></v-btn>
                                </div>
                            </template>
                        </v-list-item>
                    </v-col>
                </v-row>
                <v-row no-gutters class="fill-height align-middle">
                    <v-col class="text-center">
                        <div>Released under the MIT License.</div>
                        <div>Copyright © 2023-present Ziwen Yang</div>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </v-footer>
</template>
<style scoped lang="scss">
.squiggle {
    position: relative;
    width: 100%;
    height: 8px;
}
</style>