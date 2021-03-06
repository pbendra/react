import React from 'react';
import { render } from 'react-dom';

export default class Works extends React.Component {

    render(){
        return (
            <section id="recent-works" class="body-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <h3>Our Latest Project</h3>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <div class="btn-group">
                                <a class="btn btn-danger" href="#scroller" data-slide="prev"><i class="icon-angle-left"></i></a>
                                <a class="btn btn-danger" href="#scroller" data-slide="next"><i class="icon-angle-right"></i></a>
                            </div>
                            <p class="gap"></p>
                        </div>
                        <div class="col-md-9">
                            <div id="scroller" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="portfolio-item">
                                                    <div class="item-inner">
                                                        <img class="img-responsive" src="images/portfolio/recent/item1.png" alt="" />
                                                        <h5>
                                                        Nova - Corporate site template
                                                    </h5>
                                                        <div class="overlay">
                                                            <a class="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i class="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="portfolio-item">
                                                    <div class="item-inner">
                                                        <img class="img-responsive" src="images/portfolio/recent/item3.png" alt="" />
                                                        <h5>
                                                        Fornax - Apps site template
                                                    </h5>
                                                        <div class="overlay">
                                                            <a class="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i class="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="portfolio-item">
                                                    <div class="item-inner">
                                                        <img class="img-responsive" src="images/portfolio/recent/item2.png" alt="" />
                                                        <h5>
                                                        Flat Theme - Business Theme
                                                    </h5>
                                                        <div class="overlay">
                                                            <a class="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i class="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="portfolio-item">
                                                    <div class="item-inner">
                                                        <img class="img-responsive" src="images/portfolio/recent/item2.png" alt="" />
                                                        <h5>
                                                        Flat Theme - Business Theme
                                                    </h5>
                                                        <div class="overlay">
                                                            <a class="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i class="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="portfolio-item">
                                                    <div class="item-inner">
                                                        <img class="img-responsive" src="images/portfolio/recent/item1.png" alt="" />
                                                        <h5>
                                                        Nova - Corporate site template
                                                    </h5>
                                                        <div class="overlay">
                                                            <a class="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i class="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="portfolio-item">
                                                    <div class="item-inner">
                                                        <img class="img-responsive" src="images/portfolio/recent/item3.png" alt="" />
                                                        <h5>
                                                        Fornax - Apps site template
                                                    </h5>
                                                        <div class="overlay">
                                                            <a class="preview btn btn-danger" title="Malesuada fames ac turpis egestas" href="images/portfolio/full/item1.jpg" rel="prettyPhoto"><i class="icon-eye-open"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
