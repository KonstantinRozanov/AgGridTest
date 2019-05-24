import { ThumbnailModel } from './thumbnail-model';

export class VideoModel {
    public thumbnails: ThumbnailModel;
    public publishedAt: Date;
    public description: string;
    public videoId: string;
    public title: string;
}
