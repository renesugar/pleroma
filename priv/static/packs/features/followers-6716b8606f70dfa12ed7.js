webpackJsonp([15],{150:function(e,n,o){"use strict";o.d(n,"a",function(){return p});var t=o(2),a=o.n(t),i=o(1),c=o.n(i),r=o(3),s=o.n(r),l=o(4),u=o.n(l),d=o(0),f=o.n(d),p=function(e){function n(){var o,t,a;c()(this,n);for(var i=arguments.length,r=Array(i),l=0;l<i;l++)r[l]=arguments[l];return o=t=s()(this,e.call.apply(e,[this].concat(r))),t.handleClick=function(){t.props.onClick()},a=o,s()(t,a)}return u()(n,e),n.prototype.render=function(){var e=this.props,n=e.type,o=e.active,t=e.columnHeaderId,i="";return this.props.icon&&(i=a()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),a()("div",{role:"heading",tabIndex:"0",className:"column-header "+(o?"active":""),onClick:this.handleClick,id:t||null},void 0,i,n)},n}(f.a.PureComponent)},259:function(e,n,o){"use strict";o.d(n,"a",function(){return b});var t=o(2),a=o.n(t),i=o(1),c=o.n(i),r=o(3),s=o.n(r),l=o(4),u=o.n(l),d=o(42),f=o.n(d),p=o(0),m=o.n(p),g=o(150),h=o(91),v=o(33),b=function(e){function n(){var o,t,a;c()(this,n);for(var i=arguments.length,r=Array(i),l=0;l<i;l++)r[l]=arguments[l];return o=t=s()(this,e.call.apply(e,[this].concat(r))),t.handleHeaderClick=function(){var e=t.node.querySelector(".scrollable");e&&(t._interruptScrollAnimation=Object(h.b)(e))},t.handleScroll=f()(function(){void 0!==t._interruptScrollAnimation&&t._interruptScrollAnimation()},200),t.setRef=function(e){t.node=e},a=o,s()(t,a)}return u()(n,e),n.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(h.b)(e))},n.prototype.render=function(){var e=this.props,n=e.heading,o=e.icon,t=e.children,i=e.active,c=e.hideHeadingOnMobile,r=n&&(!c||c&&!Object(v.b)(window.innerWidth)),s=r&&n.replace(/ /g,"-"),l=r&&a()(g.a,{icon:o,active:i,type:n,onClick:this.handleHeaderClick,columnHeaderId:s});return m.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":s,className:"column",onScroll:this.handleScroll},l,t)},n}(m.a.PureComponent)},260:function(e,n,o){"use strict";o.d(n,"a",function(){return h});var t,a,i=o(2),c=o.n(i),r=o(1),s=o.n(r),l=o(3),u=o.n(l),d=o(4),f=o.n(d),p=o(0),m=o.n(p),g=o(6),h=(a=t=function(e){function n(){return s()(this,n),u()(this,e.apply(this,arguments))}return f()(n,e),n.prototype.render=function(){var e=this.props.visible;return c()("button",{className:"load-more",disabled:!e,style:{visibility:e?"visible":"hidden"},onClick:this.props.onClick},void 0,c()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},n}(m.a.PureComponent),t.defaultProps={visible:!0},a)},763:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"default",function(){return B});var t,a,i,c,r=o(2),s=o.n(r),l=o(1),u=o.n(l),d=o(3),f=o.n(d),p=o(4),m=o.n(p),g=o(0),h=(o.n(g),o(9)),v=o(5),b=o.n(v),M=o(12),k=o.n(M),w=o(271),_=o(22),y=o(152),O=o(777),j=o(259),I=o(781),C=o(260),N=o(779),R=o(11),q=o.n(R),F=function(e,n){return{accountIds:e.getIn(["user_lists","followers",n.params.accountId,"items"]),hasMore:!!e.getIn(["user_lists","followers",n.params.accountId,"next"])}},B=(t=Object(h.connect)(F))((c=i=function(e){function n(){var o,t,a;u()(this,n);for(var i=arguments.length,c=Array(i),r=0;r<i;r++)c[r]=arguments[r];return o=t=f()(this,e.call.apply(e,[this].concat(c))),t.handleScroll=function(e){var n=e.target;n.scrollTop===n.scrollHeight-n.clientHeight&&t.props.hasMore&&t.props.dispatch(Object(_.t)(t.props.params.accountId))},t.handleLoadMore=function(e){e.preventDefault(),t.props.dispatch(Object(_.t)(t.props.params.accountId))},a=o,f()(t,a)}return m()(n,e),n.prototype.componentWillMount=function(){this.props.dispatch(Object(_.v)(this.props.params.accountId)),this.props.dispatch(Object(_.x)(this.props.params.accountId))},n.prototype.componentWillReceiveProps=function(e){e.params.accountId!==this.props.params.accountId&&e.params.accountId&&(this.props.dispatch(Object(_.v)(e.params.accountId)),this.props.dispatch(Object(_.x)(e.params.accountId)))},n.prototype.render=function(){var e=this.props,n=e.accountIds,o=e.hasMore,t=null;return n?(o&&(t=s()(C.a,{onClick:this.handleLoadMore})),s()(j.a,{},void 0,s()(N.a,{}),s()(y.a,{scrollKey:"followers"},void 0,s()("div",{className:"scrollable",onScroll:this.handleScroll},void 0,s()("div",{className:"followers"},void 0,s()(I.a,{accountId:this.props.params.accountId}),n.map(function(e){return s()(O.a,{id:e,withNote:!1},e)}),t))))):s()(j.a,{},void 0,s()(w.a,{}))},n}(q.a),i.propTypes={params:b.a.object.isRequired,dispatch:b.a.func.isRequired,accountIds:k.a.list,hasMore:b.a.bool},a=c))||a},777:function(e,n,o){"use strict";var t=o(2),a=o.n(t),i=o(0),c=(o.n(i),o(9)),r=o(6),s=o(69),l=o(778),u=o(22),d=o(31),f=o(18),p=Object(r.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),m=function(){var e=Object(s.c)();return function(n,o){return{account:e(n,o.id)}}},g=function(e,n){var o=n.intl;return{onFollow:function(n){e(n.getIn(["relationship","following"])||n.getIn(["relationship","requested"])?f.g?Object(d.d)("CONFIRM",{message:a()(r.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:a()("strong",{},void 0,"@",n.get("acct"))}}),confirm:o.formatMessage(p.unfollowConfirm),onConfirm:function(){return e(Object(u.E)(n.get("id")))}}):Object(u.E)(n.get("id")):Object(u.A)(n.get("id")))},onBlock:function(n){e(n.getIn(["relationship","blocking"])?Object(u.D)(n.get("id")):Object(u.r)(n.get("id")))},onMute:function(n){e(n.getIn(["relationship","muting"])?Object(u.F)(n.get("id")):Object(u.B)(n.get("id")))}}};n.a=Object(r.g)(Object(c.connect)(m,g)(l.a))},778:function(e,n,o){"use strict";o.d(n,"a",function(){return N});var t,a,i,c=o(2),r=o.n(c),s=o(1),l=o.n(s),u=o(3),d=o.n(u),f=o(4),p=o.n(f),m=o(0),g=(o.n(m),o(12)),h=o.n(g),v=o(5),b=o.n(v),M=o(55),k=o(56),w=o(270),_=o(19),y=o(6),O=o(11),j=o.n(O),I=o(18),C=Object(y.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"}}),N=Object(y.g)((i=a=function(e){function n(){var o,t,a;l()(this,n);for(var i=arguments.length,c=Array(i),r=0;r<i;r++)c[r]=arguments[r];return o=t=d()(this,e.call.apply(e,[this].concat(c))),t.handleFollow=function(){t.props.onFollow(t.props.account)},t.handleBlock=function(){t.props.onBlock(t.props.account)},t.handleMute=function(){t.props.onMute(t.props.account)},a=o,d()(t,a)}return p()(n,e),n.prototype.render=function(){var e=this.props,n=e.account,o=e.intl,t=e.hidden;if(!n)return r()("div",{});if(t)return r()("div",{},void 0,n.get("display_name"),n.get("username"));var a=void 0;if(n.get("id")!==I.e&&null!==n.get("relationship",null)){var i=n.getIn(["relationship","following"]),c=n.getIn(["relationship","requested"]),s=n.getIn(["relationship","blocking"]),l=n.getIn(["relationship","muting"]);a=c?r()(_.a,{disabled:!0,icon:"hourglass",title:o.formatMessage(C.requested)}):s?r()(_.a,{active:!0,icon:"unlock-alt",title:o.formatMessage(C.unblock,{name:n.get("username")}),onClick:this.handleBlock}):l?r()(_.a,{active:!0,icon:"volume-up",title:o.formatMessage(C.unmute,{name:n.get("username")}),onClick:this.handleMute}):r()(_.a,{icon:i?"user-times":"user-plus",title:o.formatMessage(i?C.unfollow:C.follow),onClick:this.handleFollow,active:i})}return r()("div",{className:"account"},void 0,r()("div",{className:"account__wrapper"},void 0,r()(w.a,{className:"account__display-name",href:n.get("url"),to:"/accounts/"+n.get("id")},n.get("id"),r()("div",{className:"account__avatar-wrapper"},void 0,r()(M.a,{account:n,size:36})),r()(k.a,{account:n})),r()("div",{className:"account__relationship"},void 0,a)))},n}(j.a),a.propTypes={account:h.a.map.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMute:b.a.func.isRequired,intl:b.a.object.isRequired,hidden:b.a.bool},t=i))||t},779:function(e,n,o){"use strict";o.d(n,"a",function(){return b});var t,a,i=o(2),c=o.n(i),r=o(1),s=o.n(r),l=o(3),u=o.n(l),d=o(4),f=o.n(d),p=o(0),m=o.n(p),g=o(6),h=o(5),v=o.n(h),b=(a=t=function(e){function n(){var o,t,a;s()(this,n);for(var i=arguments.length,c=Array(i),r=0;r<i;r++)c[r]=arguments[r];return o=t=u()(this,e.call.apply(e,[this].concat(c))),t.handleClick=function(){window.history&&1===window.history.length?t.context.router.history.push("/"):t.context.router.history.goBack()},a=o,u()(t,a)}return f()(n,e),n.prototype.render=function(){return c()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,c()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),c()(g.b,{id:"column_back_button.label",defaultMessage:"Back"}))},n}(m.a.PureComponent),t.contextTypes={router:v.a.object},a)},780:function(e,n,o){"use strict";var t=o(2),a=o.n(t),i=o(0),c=(o.n(i),o(6)),r=function(){return a()("div",{className:"missing-indicator"},void 0,a()("div",{},void 0,a()(c.b,{id:"missing_indicator.label",defaultMessage:"Not found"})))};n.a=r},781:function(e,n,o){"use strict";var t=o(2),a=o.n(t),i=o(0),c=(o.n(i),o(9)),r=o(69),s=o(782),l=o(22),u=o(15),d=o(151),f=o(31),p=o(285),m=o(6),g=o(18),h=Object(m.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},muteConfirm:{id:"confirmations.mute.confirm",defaultMessage:"Mute"},blockDomainConfirm:{id:"confirmations.domain_block.confirm",defaultMessage:"Hide entire domain"}}),v=function(){var e=Object(r.c)();return function(n,o){var t=o.accountId;return{account:e(n,t)}}},b=function(e,n){var o=n.intl;return{onFollow:function(n){e(n.getIn(["relationship","following"])||n.getIn(["relationship","requested"])?g.g?Object(f.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:a()("strong",{},void 0,"@",n.get("acct"))}}),confirm:o.formatMessage(h.unfollowConfirm),onConfirm:function(){return e(Object(l.E)(n.get("id")))}}):Object(l.E)(n.get("id")):Object(l.A)(n.get("id")))},onBlock:function(n){e(n.getIn(["relationship","blocking"])?Object(l.D)(n.get("id")):Object(f.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:a()("strong",{},void 0,"@",n.get("acct"))}}),confirm:o.formatMessage(h.blockConfirm),onConfirm:function(){return e(Object(l.r)(n.get("id")))}}))},onMention:function(n,o){e(Object(u.M)(n,o))},onReport:function(n){e(Object(d.i)(n))},onMute:function(n){e(n.getIn(["relationship","muting"])?Object(l.F)(n.get("id")):Object(f.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:a()("strong",{},void 0,"@",n.get("acct"))}}),confirm:o.formatMessage(h.muteConfirm),onConfirm:function(){return e(Object(l.B)(n.get("id")))}}))},onBlockDomain:function(n,t){e(Object(f.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.domain_block.message",defaultMessage:"Are you really, really sure you want to block the entire {domain}? In most cases a few targeted blocks or mutes are sufficient and preferable.",values:{domain:a()("strong",{},void 0,n)}}),confirm:o.formatMessage(h.blockDomainConfirm),onConfirm:function(){return e(Object(p.c)(n,t))}}))},onUnblockDomain:function(n,o){e(Object(p.d)(n,o))}}};n.a=Object(m.g)(Object(c.connect)(v,b)(s.a))},782:function(e,n,o){"use strict";o.d(n,"a",function(){return y});var t,a,i=o(2),c=o.n(i),r=o(1),s=o.n(r),l=o(3),u=o.n(l),d=o(4),f=o.n(d),p=o(0),m=(o.n(p),o(12)),g=o.n(m),h=o(5),v=o.n(h),b=o(783),M=o(784),k=o(780),w=o(11),_=o.n(w),y=(a=t=function(e){function n(){var o,t,a;s()(this,n);for(var i=arguments.length,c=Array(i),r=0;r<i;r++)c[r]=arguments[r];return o=t=u()(this,e.call.apply(e,[this].concat(c))),t.handleFollow=function(){t.props.onFollow(t.props.account)},t.handleBlock=function(){t.props.onBlock(t.props.account)},t.handleMention=function(){t.props.onMention(t.props.account,t.context.router.history)},t.handleReport=function(){t.props.onReport(t.props.account)},t.handleMute=function(){t.props.onMute(t.props.account)},t.handleBlockDomain=function(){var e=t.props.account.get("acct").split("@")[1];e&&t.props.onBlockDomain(e,t.props.account.get("id"))},t.handleUnblockDomain=function(){var e=t.props.account.get("acct").split("@")[1];e&&t.props.onUnblockDomain(e,t.props.account.get("id"))},a=o,u()(t,a)}return f()(n,e),n.prototype.render=function(){var e=this.props.account;return null===e?c()(k.a,{}):c()("div",{className:"account-timeline__header"},void 0,c()(b.a,{account:e,onFollow:this.handleFollow}),c()(M.a,{account:e,onBlock:this.handleBlock,onMention:this.handleMention,onReport:this.handleReport,onMute:this.handleMute,onBlockDomain:this.handleBlockDomain,onUnblockDomain:this.handleUnblockDomain}))},n}(_.a),t.propTypes={account:g.a.map,onFollow:v.a.func.isRequired,onBlock:v.a.func.isRequired,onMention:v.a.func.isRequired,onReport:v.a.func.isRequired,onMute:v.a.func.isRequired,onBlockDomain:v.a.func.isRequired,onUnblockDomain:v.a.func.isRequired},t.contextTypes={router:v.a.object},a)},783:function(e,n,o){"use strict";o.d(n,"a",function(){return F});var t,a,i,c,r,s=o(2),l=o.n(s),u=o(1),d=o.n(u),f=o(3),p=o.n(f),m=o(4),g=o.n(m),h=o(0),v=(o.n(h),o(12)),b=o.n(v),M=o(5),k=o.n(M),w=o(6),_=o(19),y=o(26),O=o(27),j=o.n(O),I=o(11),C=o.n(I),N=o(18),R=Object(w.f)({unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},follow:{id:"account.follow",defaultMessage:"Follow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval. Click to cancel follow request"}}),q=(a=t=function(e){function n(){var o,t,a;d()(this,n);for(var i=arguments.length,c=Array(i),r=0;r<i;r++)c[r]=arguments[r];return o=t=p()(this,e.call.apply(e,[this].concat(c))),t.state={isHovered:!1},t.handleMouseOver=function(){t.state.isHovered||t.setState({isHovered:!0})},t.handleMouseOut=function(){t.state.isHovered&&t.setState({isHovered:!1})},a=o,p()(t,a)}return g()(n,e),n.prototype.render=function(){var e=this,n=this.props.account,o=this.state.isHovered;return l()(y.a,{defaultStyle:{radius:90},style:{radius:j()(o?30:90,{stiffness:180,damping:12})}},void 0,function(t){var a=t.radius;return l()("a",{href:n.get("url"),className:"account__header__avatar",role:"presentation",target:"_blank",rel:"noopener",style:{borderRadius:a+"px",backgroundImage:"url("+(N.a||o?n.get("avatar"):n.get("avatar_static"))+")"},onMouseOver:e.handleMouseOver,onMouseOut:e.handleMouseOut,onFocus:e.handleMouseOver,onBlur:e.handleMouseOut},void 0,l()("span",{style:{display:"none"}},void 0,n.get("acct")))})},n}(C.a),t.propTypes={account:b.a.map.isRequired},a),F=Object(w.g)((r=c=function(e){function n(){return d()(this,n),p()(this,e.apply(this,arguments))}return g()(n,e),n.prototype.render=function(){var e=this.props,n=e.account,o=e.intl;if(!n)return null;var t="",a="",i="";N.e!==n.get("id")&&n.getIn(["relationship","followed_by"])&&(t=l()("span",{className:"account--follows-info"},void 0,l()(w.b,{id:"account.follows_you",defaultMessage:"Follows you"}))),N.e!==n.get("id")&&(n.getIn(["relationship","requested"])?a=l()("div",{className:"account--action-button"},void 0,l()(_.a,{size:26,active:!0,icon:"hourglass",title:o.formatMessage(R.requested),onClick:this.props.onFollow})):n.getIn(["relationship","blocking"])||(a=l()("div",{className:"account--action-button"},void 0,l()(_.a,{size:26,icon:n.getIn(["relationship","following"])?"user-times":"user-plus",active:n.getIn(["relationship","following"]),title:o.formatMessage(n.getIn(["relationship","following"])?R.unfollow:R.follow),onClick:this.props.onFollow})))),n.get("locked")&&(i=l()("i",{className:"fa fa-lock"}));var c={__html:n.get("note_emojified")},r={__html:n.get("display_name_html")};return l()("div",{className:"account__header",style:{backgroundImage:"url("+n.get("header")+")"}},void 0,l()("div",{},void 0,l()(q,{account:n}),l()("span",{className:"account__header__display-name",dangerouslySetInnerHTML:r}),l()("span",{className:"account__header__username"},void 0,"@",n.get("acct")," ",i),l()("div",{className:"account__header__content",dangerouslySetInnerHTML:c}),t,a))},n}(C.a),c.propTypes={account:b.a.map,onFollow:k.a.func.isRequired,intl:k.a.object.isRequired},i=r))||i},784:function(e,n,o){"use strict";o.d(n,"a",function(){return M});var t,a=o(2),i=o.n(a),c=o(1),r=o.n(c),s=o(3),l=o.n(s),u=o(4),d=o.n(u),f=o(0),p=o.n(f),m=o(284),g=o(58),h=o(6),v=o(18),b=Object(h.f)({mention:{id:"account.mention",defaultMessage:"Mention @{name}"},edit_profile:{id:"account.edit_profile",defaultMessage:"Edit profile"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},block:{id:"account.block",defaultMessage:"Block @{name}"},mute:{id:"account.mute",defaultMessage:"Mute @{name}"},follow:{id:"account.follow",defaultMessage:"Follow"},report:{id:"account.report",defaultMessage:"Report @{name}"},share:{id:"account.share",defaultMessage:"Share @{name}'s profile"},media:{id:"account.media",defaultMessage:"Media"},blockDomain:{id:"account.block_domain",defaultMessage:"Hide everything from {domain}"},unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"}}),M=Object(h.g)(t=function(e){function n(){var o,t,a;r()(this,n);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return o=t=l()(this,e.call.apply(e,[this].concat(c))),t.handleShare=function(){navigator.share({url:t.props.account.get("url")})},a=o,l()(t,a)}return d()(n,e),n.prototype.render=function(){var e=this.props,n=e.account,o=e.intl,t=[],a="";if(t.push({text:o.formatMessage(b.mention,{name:n.get("username")}),action:this.props.onMention}),"share"in navigator&&t.push({text:o.formatMessage(b.share,{name:n.get("username")}),action:this.handleShare}),t.push(null),t.push({text:o.formatMessage(b.media),to:"/accounts/"+n.get("id")+"/media"}),t.push(null),n.get("id")===v.e?t.push({text:o.formatMessage(b.edit_profile),href:"/settings/profile"}):(n.getIn(["relationship","muting"])?t.push({text:o.formatMessage(b.unmute,{name:n.get("username")}),action:this.props.onMute}):t.push({text:o.formatMessage(b.mute,{name:n.get("username")}),action:this.props.onMute}),n.getIn(["relationship","blocking"])?t.push({text:o.formatMessage(b.unblock,{name:n.get("username")}),action:this.props.onBlock}):t.push({text:o.formatMessage(b.block,{name:n.get("username")}),action:this.props.onBlock}),t.push({text:o.formatMessage(b.report,{name:n.get("username")}),action:this.props.onReport})),n.get("acct")!==n.get("username")){var c=n.get("acct").split("@")[1];a=i()("div",{className:"account__disclaimer"},void 0,i()(h.b,{id:"account.disclaimer_full",defaultMessage:"Information below may reflect the user's profile incompletely."})," ",i()("a",{target:"_blank",rel:"noopener",href:n.get("url")},void 0,i()(h.b,{id:"account.view_full_profile",defaultMessage:"View full profile"}))),t.push(null),n.getIn(["relationship","domain_blocking"])?t.push({text:o.formatMessage(b.unblockDomain,{domain:c}),action:this.props.onUnblockDomain}):t.push({text:o.formatMessage(b.blockDomain,{domain:c}),action:this.props.onBlockDomain})}return i()("div",{},void 0,a,i()("div",{className:"account__action-bar"},void 0,i()("div",{className:"account__action-bar-dropdown"},void 0,i()(m.a,{items:t,icon:"bars",size:24,direction:"right"})),i()("div",{className:"account__action-bar-links"},void 0,i()(g.b,{className:"account__action-bar__tab",to:"/accounts/"+n.get("id")},void 0,i()("span",{},void 0,i()(h.b,{id:"account.posts",defaultMessage:"Posts"})),i()("strong",{},void 0,i()(h.c,{value:n.get("statuses_count")}))),i()(g.b,{className:"account__action-bar__tab",to:"/accounts/"+n.get("id")+"/following"},void 0,i()("span",{},void 0,i()(h.b,{id:"account.follows",defaultMessage:"Follows"})),i()("strong",{},void 0,i()(h.c,{value:n.get("following_count")}))),i()(g.b,{className:"account__action-bar__tab",to:"/accounts/"+n.get("id")+"/followers"},void 0,i()("span",{},void 0,i()(h.b,{id:"account.followers",defaultMessage:"Followers"})),i()("strong",{},void 0,i()(h.c,{value:n.get("followers_count")}))))))},n}(p.a.PureComponent))||t}});
//# sourceMappingURL=followers-6716b8606f70dfa12ed7.js.map