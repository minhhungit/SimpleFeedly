namespace SimpleFeedly.Rss {
    export interface RssFeedCardProps {
        items: RssFeedItemsRow[];
        editItemClickEvt: (item: RssFeedItemsRow) => void;
    }

    export class RssFeedCard extends React.Component<RssFeedCardProps> {

        private getRandomColor(): string {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            return `#${randomColor}`;
        }

        render(): React.ReactNode {

            let bkImage = "/Content/site/images/tech-ph.png";
            return (
                <React.Fragment>
                    <div className="custom-card-items" style={{ marginLeft: "-10px" }}>
                        {this.props.items.map((item, index) => {
                            return (
                                <div className="custom-card-item col-md-12 col-md-6 col-md-3" key={item.Id} style={{ marginTop: "5px", marginBottom: "5px", height: "138px", position: "relative" }}>
                                    <div style={{ border: "dashed 1px #ccc", borderTop: "none", borderRight: "none", position: "absolute", top: "11px", right: "26px", padding: "0 0 2px 3px", borderBottomLeftRadius: "3px", backgroundColor: "#fff" }}><span className="fa fa-pencil-square fa-lg text-purple" onClick={() => { this.props.editItemClickEvt(item); return true; }} style={{ cursor: "pointer", opacity: "0.9" }}></span></div>
                                    <div style={{ border: "solid 1px #ddd", padding: "10px", borderRadius: "5px", boxShadow: "5px 7px 15px #e2dfdf" }}>
                                        <a href={item.Link} target="_blank">
                                            <Common.MyReactImage
                                                src={item.CoverImageUrl == null ? bkImage : item.CoverImageUrl}
                                                //fallbackSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                                                fallbackSrc={bkImage}
                                                style={{ width: "100%", minHeight: "90px", maxHeight: "92px", objectFit: "cover", backgroundColor: this.getRandomColor(), border: "solid 1px #ececec" }}
                                            />
                                        </a>
                                        <a href={item.Link} target="_blank">
                                            <div style={{ textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingTop: "6px", fontWeight: 600 }}>{item.Title}</div>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </React.Fragment>
            );
        }
    }
}