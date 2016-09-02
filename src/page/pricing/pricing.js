import React from 'react';
import { render } from 'react-dom';

import Page from '../page';

export default class Pricing extends React.Component {

    render(){
        return (
            <Page>
                <section id="pricing" class="body-section">
                    <div class="container">
                        <div class="center">
                            <h2>See our Pricings</h2>
                            <p class="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                        <div class="gap"></div>
                        <div id="pricing-table" class="row">
                            <div class="col-md-3 col-xs-6">
                                <ul class="plan plan1">
                                    <li class="plan-name">
                                        <h3>Basic</h3>
                                    </li>
                                    <li class="plan-price">
                                        <div>
                                            <span class="price"><sup>$</sup>29</span>
                                            <small>month</small>
                                        </div>
                                    </li>
                                    <li>
                                        <strong>5GB</strong> Storage
                                    </li>
                                    <li>
                                        <strong>1GB</strong> RAM
                                    </li>
                                    <li>
                                        <strong>400GB</strong> Bandwidth
                                    </li>
                                    <li>
                                        <strong>10</strong> Email Address
                                    </li>
                                    <li>
                                        <strong>Forum</strong> Support
                                    </li>
                                    <li class="plan-action">
                                        <a href="#" class="btn btn-primary btn-md">Signup</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-xs-6">
                                <ul class="plan plan2 featured">
                                    <li class="plan-name">
                                        <h3>Standard</h3>
                                    </li>
                                    <li class="plan-price">
                                        <div>
                                            <span class="price"><sup>$</sup>39</span>
                                            <small>month</small>
                                        </div>
                                    </li>
                                    <li>
                                        <strong>5GB</strong> Storage
                                    </li>
                                    <li>
                                        <strong>1GB</strong> RAM
                                    </li>
                                    <li>
                                        <strong>400GB</strong> Bandwidth
                                    </li>
                                    <li>
                                        <strong>10</strong> Email Address
                                    </li>
                                    <li>
                                        <strong>Forum</strong> Support
                                    </li>
                                    <li class="plan-action">
                                        <a href="#" class="btn btn-primary btn-md">Signup</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-xs-6">
                                <ul class="plan plan3">
                                    <li class="plan-name">
                                        <h3>Advanced</h3>
                                    </li>
                                    <li class="plan-price">
                                        <div>
                                            <span class="price"><sup>$</sup>49</span>
                                            <small>month</small>
                                        </div>
                                    </li>
                                    <li>
                                        <strong>50GB</strong> Storage
                                    </li>
                                    <li>
                                        <strong>8GB</strong> RAM
                                    </li>
                                    <li>
                                        <strong>1024GB</strong> Bandwidth
                                    </li>
                                    <li>
                                        <strong>Unlimited</strong> Email Address
                                    </li>
                                    <li>
                                        <strong>Forum</strong> Support
                                    </li>
                                    <li class="plan-action">
                                        <a href="#" class="btn btn-primary btn-md">Signup</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-xs-6">
                                <ul class="plan plan4">
                                    <li class="plan-name">
                                        <h3>Mighty</h3>
                                    </li>
                                    <li class="plan-price">
                                        <div>
                                            <span class="price"><sup>$</sup>99</span>
                                            <small>month</small>
                                        </div>
                                    </li>
                                    <li>
                                        <strong>50GB</strong> Storage
                                    </li>
                                    <li>
                                        <strong>8GB</strong> RAM
                                    </li>
                                    <li>
                                        <strong>1024GB</strong> Bandwidth
                                    </li>
                                    <li>
                                        <strong>Unlimited</strong> Email Address
                                    </li>
                                    <li>
                                        <strong>Forum</strong> Support
                                    </li>
                                    <li class="plan-action">
                                        <a href="#" class="btn btn-primary btn-md">Signup</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Page>
        );
    }
}
