import {action, observable} from 'mobx';
import {Post, getPosts} from '../apis/posts.api';

export default class HomeStore {
  @observable photoReady: boolean = false;

  @observable posts: Post[] = [];

  @observable loading: boolean = false;

  @action getPosts = async () => {
    this.loading = true;
    try {
      const posts = await getPosts();
      this.posts = posts;
    } catch (error) {
      this.posts = [];
      throw error;
    } finally {
      this.loading = false;
    }
  };

  @action addPost = (uriPhoto: string) => {
    const post: Post = {
      author: {
        id: 1,
        name: 'andre-borges',
        avatar:
          'https://avatars1.githubusercontent.com/u/30246642?s=460&u=24105a32bde1c0c2bc975b2d998bceb92df6bf5e&v=4',
      },
      authorId: 1,
      description: 'React Native Zika',
      id: this.posts.length + 1,
      image: uriPhoto,
    };

    this.posts.unshift(post);
  };

  @action toogleStatus = (status: boolean) => {
    this.photoReady = status;
  };
}

const homeStore = new HomeStore();
export {homeStore};
