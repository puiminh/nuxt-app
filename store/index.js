export const state = () => ({
    posts: [
        {
            id: 1,
            title: "PHP",
            content: "LOUIS VUITTON Official Website: Choose your country or region, pick-up your language and find the right version for you."
        },
        {
            id: 2,
            title: "Java",
            content: "LOUIS VUITTON Official Website: Choose your country or region, pick-up your language and find the right version for you."
        },
        {
            id: 3,
            title: "JavaScript",
            content: "LOUIS VUITTON Official Website: Choose your country or region, pick-up your language and find the right version for you."
        }
    ]
})
export const mutations = {
    ADD_POST(state, post) {
        state.posts.unshift({ id: post.id, content: post.content, title: post.title })
    },
    EDIT_POST(state, post) {
        // state.posts.splice(state.posts.indexOf(oldpost), 1);
        // state.posts.unshift({ id: post.id, content: post.content, title: post.title })

        console.log(post)
        console.log(post.id)

        state.posts = (state.posts.map(p =>
                p.id == post.id
                  ? { ...p, title: post.title, content: post.content }
                  : p
              ));

        
    },
    REMOVE_POST(state, post){
        state.posts.splice(state.posts.indexOf(post), 1);
    }
    
}