import React from 'react';
import { render } from 'react-dom';

export default class Services extends React.Component {

    render(){
        return (
            <section id="services" class="emerald body-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="media">
                                <div class="pull-left">
                                    <i class="icon-twitter icon-md"></i>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">Twitter Marketing</h3>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="media">
                                <div class="pull-left">
                                    <i class="icon-facebook icon-md"></i>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">Facebook Marketing</h3>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="media">
                                <div class="pull-left">
                                    <i class="icon-google-plus icon-md"></i>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">Google Plus Marketing</h3>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



