const data = [
    {
        id: 0,
        video_src: "https://d3jutyk6ujs121.cloudfront.net/Ab-Soul%20-%20Moonshooter%20(Official%20Visualizer).mp4"
        , avatar_src: "data:image/jpeg;base64,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",
        video_title: "Ab-Soul - Moonshooter (Official Visualizer)"
        , channelname: "Top Dawg Entertainment"
        , subtext: "563K views * 5 months ago"
    },
    {
        id: 1,
        video_poster: "https://c4.wallpaperflare.com/wallpaper/974/383/805/neon-genesis-evangelion-castling-anime-eva-unit-13-hd-wallpaper-preview.jpg"
        , video_src: "https://d3jutyk6ujs121.cloudfront.net/The%20Beauty%20Of%20Neon%20Genesis%20Evangelion.mp4"
        , avatar_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBvaKGGA_QmyYyXbNfkVHHiJFq1C_YVZIMQ&usqp=CAU"
        , video_title: "The Beauty Of Neon Genesis Evangelion"
        , channelname: "Kyoto"
        , subtext: "50K views * 2 years ago"
    },
    {
        id: 2,
        video_poster: 'https://media.gq.com/photos/621558d6d4a03b994ca4a0e1/master/w_960,c_limit/Screen%20Shot%202022-02-16%20at%201.29.04%20PM.png',
        video_src: "https://d3jutyk6ujs121.cloudfront.net/%EF%BC%A2%EF%BC%A9%EF%BC%B4%EF%BC%B4%EF%BC%A5%EF%BC%B2%EF%BC%B7%EF%BC%A5%EF%BC%B3%EF%BC%B4.mp4"
        , avatar_src: "data:image/jpeg;base64,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"
        , video_title: "BITTERWEST"
        , channelname: "Cookin Soul"
        , subtext: "78K views * 5 years ago"
    },
    {
        id: 3,
        video_poster: "https://wallpaperaccess.com/full/20826.jpg"
        , video_src: "https://d3jutyk6ujs121.cloudfront.net/AAP%20Rocky%20-%20AAP%20Forever%20(Official%20Video)%20ft.%20Moby.mp4"
        , video_title: "A$AP Rocky - A$AP Forever"
        , channelname: "A$AP Rocky"
        , subtext: "121K views * 2 yr ago"
    },
    {
        id: 4,
        video_poster: "https://wallpaperset.com/w/full/6/2/e/32092.jpg"
        , video_src: "https://d3jutyk6ujs121.cloudfront.net/Toshiro%20Mifune%20-%20Fights%20Compilation.mp4"
        , avatar_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw19_qsNAGhJ3iruWakx_WQJpvZ21Zxs0R5g&usqp=CAU"
        , video_title: "Toshiro Mifune - Fights Compilation"
        , channelname: "Akira Kurosawa Geek"
        , subtext: "27K views * 10 years ago"
    },
    {
        id: 5,
        video_poster: "https://images.prismic.io/rockthebells/45aa39eb-f447-4d15-a951-f6ca0938f402_blackthought.png?auto=compress,format&rect=0,0,1920,800&w=1920&h=800"
        , video_src: "https://d3jutyk6ujs121.cloudfront.net/El%20Michels%20Affair%20_%20Black%20Thought%20-%20Glorious%20Game%20(Official%20Music%20Video)(1080P_HD).mp4"
        , video_title: "Glorious Game - Black Thought"
        , channelname: "Cheat Codes"
        , subtext: "50K views * 1 year ago"
    }

]

export default data