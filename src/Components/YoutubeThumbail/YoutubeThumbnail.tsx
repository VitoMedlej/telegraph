
export const getYouTubeId = (url : string) => {
    console.log('getYouTubeId - url: ', url);
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    console.log('getYouTubeId - match: ', match);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  


  const YouTubeThumbnail = ({ url } : any) => {
    console.log('YouTubeThumbnail - url: ', url);
    if (!url) return 'Invalid URL';
    
    const videoId = getYouTubeId(url);
    console.log('YouTubeThumbnail - videoId: ', videoId);
    
    if (!videoId) return 'Invalid YouTube URL';
    
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
    console.log('YouTubeThumbnail - thumbnailUrl: ', thumbnailUrl);
    
    return thumbnailUrl;
  };
  
  export default YouTubeThumbnail;